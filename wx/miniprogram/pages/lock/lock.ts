// pages/lock/lock.ts
// 获取应用实例

import { routing } from "../../utils/routing"

const app = getApp<IAppOption>()
const shareLocationKey = "share_location"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shareLocation: true,
    avatarURL: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(opt:Record<'car_id',string>) {
    const option:routing.LockOpts = opt
    console.log('lock onload unlocking carId ',option.car_id)
    // 等待用户信息
    const userInfo = await app.globalData.userInfo
    // 设置用户头像
    this.setData({
      avatarURL: userInfo.avatarUrl,
      shareLocation: wx.getStorageSync(shareLocationKey) || true
    })
  },
  // 点击获取用户信息（头像等）
  onGetUserInfo(e: any) {
    const userInfo: WechatMiniprogram.UserInfo = e.detail.userInfo

    if (userInfo) {
      app.resolveUserInfo(userInfo)
    }

  },
  // 设置分享用户位置
  onShareLocation(e: any) {
    const shareLocation: boolean = e.detail.value
    wx.setStorageSync(shareLocationKey, shareLocation)
  },
  // 立即开锁
  onUnlockTap() {
    // 获取用户位置
    wx.getLocation({
      type: 'gcj02',
      success: loc => {
        console.log(loc)
        avatarURL: this.data.shareLocation ? this.data.avatarURL : ''
        // 开锁操作
        wx.showLoading({
          title: '开锁中',
          mask: true
        })
        // 模拟开锁成功后，跳转到计费页面
        const tripId='tripId001'
        setTimeout(() => {
          wx.redirectTo({
            url: routing.drving({
               trip_id : tripId
            }),
            // 跳转完成后，隐藏loading页面
            complete: () => {
              wx.hideLoading()
            }
          })
        }, 2000);

      },
      // 如果用户位置获取失败，则提示授权
      fail: () => {
        wx.showToast({
          icon: 'none',
          title: '请前往设置页授权'
        })
      }
    })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  async onReady() {
    console.log('lock onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})