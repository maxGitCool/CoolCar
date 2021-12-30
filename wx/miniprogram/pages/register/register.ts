import { routing } from "../../utils/routing"
const app = getApp<IAppOption>()
// pages/register/register.ts
Page({
  redirectURL: '',
  data: {
    licNo: '',
    name: '',
    licImgURL: '',
    state: 'UNSUBMITTED',
    genderIndex: 0,
    genders: ['未知', '男', '女', '其它'],
    birthDate: '1990-01-01',
  },
  /**
 * 生命周期函数--监听页面加载
 */
  onLoad(ops:Record<'redirect',string>) {
    const option : routing.registerOpts = ops
    if (option.redirect) {
      this.redirectURL = decodeURIComponent(option.redirect)
    }
    console.log('rigister onload redirectURL ', option.redirect)

  },
  // 上传驾驶证信息
  onUploadLic() {
    wx.chooseImage({
      success: res => {
        if (res.tempFilePaths.length > 0) {
          this.setData({
            licImgURL: res.tempFilePaths[0]
          })
          // TODO 模拟调用后台返回驾驶证信息，且绑定到前端页面属性上
          setTimeout(() => {
            this.setData({
              licNo: '001200121',
              name: '张三',
              genderIndex: 1,
              birthDate: '2000-01-01'
            })
          }, 1000);
        }
      }
    })
  },
  // 性别选择项改变触发事件
  onGenderChange(e: any) {
    this.setData({
      genderIndex: parseInt(e.detail.value),
    })
  },
  // 生日改变触发事件
  onBirthDateChange(e: any) {
    this.setData({
      birthDate: e.detail.value,
    })
  },
  // 提前审核
  onSubmit() {
    // 设置审核中
    this.setData({
      state: 'PENDING'
    })
    // 模拟审核通过后跳转到开锁页面
    setTimeout(() => {
      this.onLicVerified()
    }, 1000)
  },
  //重新审核
  onResubmit() {
    this.setData({
      state: 'UNSUBMITTED'
    })
  },
  // 审核通过
  onLicVerified() {
    this.setData({
      state: 'VERIFIED'
    })

    // 审核通过后跳转
    if (this.redirectURL) {
      wx.redirectTo({
        url: this.redirectURL
      })
    }

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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