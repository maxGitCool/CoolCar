
import { getSetting, getUserInfo } from "./utils/wxapi"
import {CoolCar} from "./service/proto_gen/trip_pb"

import camelcaseKeys from "camelcase-keys"
import { auth } from "./service/proto_gen/auth/auth_pb"
let resolveUserInfo: (value: WechatMiniprogram.UserInfo | PromiseLike<WechatMiniprogram.UserInfo>) => void
let rejectUserInfo: (reason?: any) => void

App<IAppOption>({
  globalData: {
    userInfo: new Promise((resolve, reject) => {
      resolveUserInfo = resolve
      rejectUserInfo = reject
    })
  },
  onShow(){
  //    // GRPC-GateWay调通后台简单测试：调用GRPC服务
  //    wx.request({
  //     url: "http://localhost:8080/trip/123",
  //     method: "GET",
  //     success: res => {
  //         console.log(res.data)
  //         // 服务器是使用属性的原始命名，但是GRPC使用
  //         const getTripRes = CoolCar.GetTripResponse.fromObject(
  //          camelcaseKeys(res.data as object,{
  //            deep:true
  //           }))
  //         console.log(getTripRes)

  //         console.log('status is ',CoolCar.TripStatus[getTripRes.trip?.status!])
  //     },
  //     fail: console.error
  // })
  console.log("onshow")
},
  async onLaunch() {
   
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
          // 信息描述
          // openId 针对用户客户端而说，不同人有不同openId
          // unionId 针对小程序商户来说，一个小程序只有一个unionId
        wx.request({
          url:"http://localhost:8080/v1/auth/login",
          method:"POST",
          data:{
            code : res.code
          } as auth.v1.ILoginRequest,
          success: res =>{
            console.log(res.data)
            console.log(camelcaseKeys(res.data as object))
            const loginResp :auth.v1.ILoginResponse = auth.v1.LoginResponse.fromObject(
              camelcaseKeys(res.data as object)
            )
            console.log(loginResp)
          },
          fail:console.log
        })
      },
    })

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