/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    //userInfo?: WechatMiniprogram.UserInfo,
    userInfo : Promise<WechatMiniprogram.UserInfo>,
  }
  resolveUserInfo(userInfo:WechatMiniprogram.UserInfo):void
  rejectUserInfo(reason?: any):void
  
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}