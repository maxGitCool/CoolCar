// index.ts
// 获取应用实例
//const app = getApp<IAppOption>()

import { routing } from "../../utils/routing"

Page({
  
  isPageShowing: false,
  avatarURL: '',
  data: {
    setting: {
      skew: 0,
      rotate: 0,
      showLocation: true,
      showScale: false,
      subKey: '',
      layerStyle: 1,
      enableZoom: true,
      enableScroll: true,
      enableRotate: false,
      showCompass: false,
      enable3D: true,
      enableOverlooking: false,
      enableSatellite: false,
      enableTraffic: false,
    },
    latitude: 39.959353,
    longitude: 116.439599,
    markers: [{
      iconPath: '/resources/car.png',
      id: 1,
      latitude: 39.959353,
      longitude: 116.439599,
      title: 'T.I.T 创意园11',
      label: {
        content: '建达大厦'
      },
      width: 50,
      height: 50
    }, {
      iconPath: '/resources/car.png',
      id: 2,
      latitude: 39.959799,
      longitude: 116.439228,
      title: 'T.I.T 创意园22',
      label: {
        content: '如家快捷'
      },
      width: 50,
      height: 50
    }],    
  },
  // 点击我的位置
  onMyLocationTap() {
    console.log('onMyLocationTap')
    wx.getLocation({
      type: 'gcj02',
      success: res => {
        console.log('onMyLocationTap success', res.latitude, res.longitude)
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      },
      fail: () => {
        wx.showToast({
          icon: 'none',
          title: '请前往设置页授权'
        })
      }
    })
  },
  // 扫码租车
  onScanTap() {
    console.log('1')
    wx.scanCode({
      success:async () => {
        // 调用组件
        await this.selectComponent("#licModal").showModal()
        // 假设扫码某一辆车
        const carId = 'carId001'
        const redirectURL = routing.Lock({
          car_id:carId
        })
        wx.navigateTo({
          url: routing.register({
              redirectURL:redirectURL
          })
        })
        // wx.showModal({
        //   title:'身份认证',
        //   content:'需要身份认证才能租车',
        //   success: ()=>{
            
        //   }
        // })
     
      },
      fail: console.error
    })
  },
  async onLoad() {
    console.log('index onload')
  
    const awaituserInfo = await getApp<IAppOption>().globalData.userInfo
    this.setData({
      avatarURL: awaituserInfo.avatarUrl
    })
  },
  // 点击头像
  onMyTripsTap() {
    wx.navigateTo({
      url: routing.Mytrips()
    })
  },
  onShow() {
    this.isPageShowing = true
  },
  onHide() {
    this.isPageShowing = false
  },
  //移动小车
  moveCars() {
    const map = wx.createMapContext("myMap")
    const dest = {
      latitude: 39.959799,
      longitude: 116.439228
    }

    const moveCar = () => {
      console.log(dest.latitude)
      dest.latitude += 0.001
      dest.longitude += 0.001
      map.translateMarker({
        destination: {
          latitude: dest.latitude,
          longitude: dest.longitude,
        },
        markerId: 1,
        autoRotate: false,
        rotate: 0,
        duration: 5000,
        animationEnd: () => {
          if (this.isPageShowing)
            moveCar()
        }
      })
    }
    moveCar()
  },
  
  // // 事件处理函数
  // bindViewTap() {
  //   wx.navigateTo({
  //     url: '../logs/logs',
  //   })
  // },
  // onLoad() {
  //   // @ts-ignore
  //   if (wx.getUserProfile) {
  //     this.setData({
  //       canIUseGetUserProfile: true
  //     })
  //   }
  // },
  // getUserProfile() {
  //   // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
  //   wx.getUserProfile({
  //     desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
  //     success: (res) => {
  //       console.log(res)
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   })
  // },
  // getUserInfo(e: any) {
  //   // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
  //   console.log(e)
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
