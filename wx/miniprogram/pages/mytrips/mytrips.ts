import { routing } from "../../utils/routing"

const app = getApp<IAppOption>()

interface Trip {
  id: string
  shortId: string
  start: string
  end: string
  duration: string
  fee: string
  distance: string
  status: string
  inProgress: boolean
}
// 左侧导航
interface MainItem {
  id: string
  navId: string
  navScrollId: string
  data: Trip
}
// 右侧导航
interface NavItem {
  id: string
  mainId: string
  label: string
}

interface MainItemQueryResult {
  id: string
  top: number
  dataset: {
    navId: string
    navScrollId: string
  }
}
enum TripStatus {
  IN_PROGRESS,
  FINISHED,
  UNSUBMITTED,
  PENDING,
  VERIFIED
}
const tripStatusMap = new Map([
  [TripStatus.IN_PROGRESS, '进行中'],
  [TripStatus.FINISHED, '已完成'],
])

const licStatusMap = new Map([
  [TripStatus.UNSUBMITTED, '未认证'],
  [TripStatus.PENDING, '未认证'],
  [TripStatus.VERIFIED, '已认证'],
])

Page({
  scrollStates: {
    mainItems: [] as MainItemQueryResult[],
  },

  data: {
    indicatordots: true,//显示缩放小点
    autoplay: true, // 自动播放
    interval: 3000, //多少毫秒滚动下一张
    duration: 500, // 流动下一张的毫秒时长
    circular: true,//循环播放
    displaymultipleitems: 1, // 一次显示几张图片
    previousmargin: 1,
    nextmargin: 1,
    vertical: false,//纵向滚动
    current: 0, //控制显示第几张图片
    avatarURL: '',
    licStatus: '未认证',
    promotionItems: [
      {
        img: '/resources/banner/001.jpg',
        promotionId: 1
      },
      {
        img: '/resources/banner/002.jpg',
        promotionId: 2
      },
      {
        img: '/resources/banner/003.jpg',
        promotionId: 3
      },
      {
        img: '/resources/banner/004.jpg',
        promotionId: 4
      }
    ],
   
    tripsHeight:0,
    mainScroll: '',
    mainItems: [] as MainItem[],
    navItems: [] as NavItem[],
    navCount: 0,
    navSel: '',
    navScroll: '',
  },
  // 事件触发时执行
  onSwiperChange(e: any) {
    //console.log('onSwiperChange')
  },
  // 点击swiper广告轮转触发
  onPromotionItemTap(e: any) {
    console.log(e)
    const promotionId = e.currentTarget.dataset.promotionId
    if (promotionId) {
      console.log(promotionId)
    }
  },
  // 点击获取用户信息（头像等）
  onGetUserInfo(e: any) {
    const userInfo: WechatMiniprogram.UserInfo = e.detail.userInfo

    if (userInfo) {
      app.resolveUserInfo(userInfo)
    }

  },
  // 注册驾驶证
  onRegisterTap() {
    wx.navigateTo({
      url: routing.register()
    })
  },
  // 选中所有元素，计算高度保存，以便计算滚动右侧元素位置来定位左侧导航栏
  prepareScrollStates() {
   
    wx.createSelectorQuery().selectAll('.main-item')
        .fields({
            id: true,
            dataset: true,
            rect: true,
        }).exec(res => {
            this.scrollStates.mainItems = res[0]
        })
},
  //左侧导航点击时
  onNavItemTap(e: any) {
    const mainId: string = e.currentTarget?.dataset?.mainId
    const navId: string = e.currentTarget?.id
    if (mainId && navId) {
        this.setData({
            mainScroll: mainId, //设置右侧导航滑动位置
            navSel: navId, //设置左侧导航滑动位置
        })
    }
},
// 右侧导航滚动时发生
onMainScroll(e: any) {
  //console.log(e)
  // 滚动实际高度
  const top: number = e.currentTarget?.offsetTop + e.detail?.scrollTop
  if (top === undefined) {
      return
  }

  const selItem = this.scrollStates.mainItems.find(
      v => v.top >= top)
  if (!selItem) {
      return
  }

  this.setData({
      navSel: selItem.dataset.navId,
      navScroll: selItem.dataset.navScrollId,
  })
},
// 点击右侧导航
onMianItemTap(e: any) {
  //console.log(e)
  if (!e.currentTarget.dataset.tripInProgress) {
      return
  }
  const tripId = e.currentTarget.dataset.tripId
  if (tripId) {
      wx.redirectTo({
          url: routing.drving({
              trip_id: tripId,
          }),
      })
  }
},
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    // 显示行程
    this.populateTrips()
    // 等待头像
    const userInfo = await app.globalData.userInfo
    this.setData({
      avatarURL: userInfo.avatarUrl
    })


  },
  populateTrips() {
 
    const mainItems: MainItem[] = []
    const navItems:NavItem[] =[]
    let navSel = ''
    let preNav=''
    for (let i = 0; i < 100; i++) {
      const mainId='main-' + i
      const navId = 'nav-' + i
      const tripId = (10000 + i).toString()
     
      if (!preNav) {
        preNav = navId
      }
      mainItems.push({
        id:mainId,
        navId:navId,
        navScrollId:preNav,
        data:{
          id: tripId,
          start: '东方明珠',
          end: '迪士尼',
          distance: '27公里',
          duration: '0时44分',
          fee: '128.00元',
          status: '',
          inProgress: false,
          shortId: i.toString()
        }        
      })
      navItems.push({
        id:navId,
        mainId:mainId,
        label:tripId
      })
      if (i==0) {
        navSel=navId
      }
      preNav = navId
    }
    
    this.setData({
      mainItems,
      navItems,
      navSel
    }, () => {
      this.prepareScrollStates()
  })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.createSelectorQuery().select('#heading')
    .boundingClientRect(rect => {
        // 计算导航高度
        const height = wx.getSystemInfoSync().windowHeight - rect.height
        this.setData({
            tripsHeight: height,
            navCount: Math.round(height/50),
        }, () => {
           
        })
    }).exec()
  },

})