import {getSetting, getUserInfo} from "./utils/wxapi"

let resolveUserInfo: (value: WechatMiniprogram.UserInfo | PromiseLike<WechatMiniprogram.UserInfo>) => void
let rejectUserInfo: (reason?: any) => void

App<IAppOption>({
  globalData: {
    userInfo: new Promise((resolve, reject) => {
      resolveUserInfo = resolve
      rejectUserInfo = reject
    })
  },
  async onLaunch() {
    // 调用GRPC服务
    // wx.request({
    //   url:"http://localhost:8080/trip/123",
    //   method:"GET",
    //   success:res =>{
    //     console.info(res)
    //   },
    //   fail:console.error
    // })
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // // 登录
    // wx.login({
    //   success: res => {
    //     console.log(res.code)
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   },
    // })

    // try {
    //   const res = await getSetting()
    //   if (res.authSetting['scope.userInfo']) {
    //     const awaituserInfo = await getUserInfo()
    //     resolveUserInfo(awaituserInfo.userInfo)   
    //   }
    // }
    // catch(err){
    //   rejectUserInfo(err)
    // }
  },
  resolveUserInfo(userInfo: WechatMiniprogram.UserInfo) {
    resolveUserInfo(userInfo)
  },
  rejectUserInfo(reason?: any) {
    rejectUserInfo(reason)
  },
})