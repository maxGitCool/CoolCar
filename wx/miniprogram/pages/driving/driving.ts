import { formatTime } from "../../utils/format"
import { routing } from "../../utils/routing"

const updateIntervalSec = 5
const initialLat = 39.959799
const initialLng = 116.439228
const centPerSec = 0.7
// 格式化时间
function formatDuration(sec: number) {
  const padString = (n: number) => 
    n < 10 ? '0' + n.toFixed(0) : n.toFixed(0)
  
  const h = Math.floor(sec / 3600)
  sec -= 3600 * h

  const m = Math.floor(sec / 60)
  sec -= 60 * m

  const s = Math.floor(sec)

  return `${padString(h)}:${padString(m)}:${padString(s)}`
}
// 
function formatFee(cents:number) {
  return (cents / 100).toFixed(2)
}

Page({
  timer: undefined as number | undefined,
  /**
   * 页面的初始数据
   */
  data: {
   
    location: {
      latitude: initialLat,
      longitude: initialLng,
    },
    scale: 12,
    elapsed: '00:00:00',
    fee: '0.00',
    markers: [
      {
        iconPath: "/resources/car.png",
        id: 0,
        latitude: initialLat,
        longitude: initialLng,
        width: 20,
        height: 20,
      },
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(opt:Record<'trip_id',string>) {
    const option:routing.DrivingOpts= opt
    console.log('driving load trip_id ',option.trip_id)
    this.setupLocationUpdator()
    this.setupTimer()
  },
  onUnLoad() {
    // 停止位置获取
    wx.stopLocationUpdate()
    // 定时器结束 
    if(this.timer){
       clearInterval(this.timer)
    }
  },
  // 实时得到用户位置
  setupLocationUpdator() {
    wx.startLocationUpdate({
      fail: console.error,
    })

    wx.onLocationChange(loc => {
      console.log(loc)
      this.setData({
        location: {
          latitude: loc.latitude,
          longitude: loc.longitude,
        },
      })
    })
  },
  // 开始计费
  setupTimer() {
    let elapsedSec = 0
    let cents =0
    this.timer = setInterval(() => {
      //console.log(elapsedSec)
      elapsedSec++
      cents += centPerSec
      this.setData({
        elapsed: formatDuration(elapsedSec),
        fee:formatFee(cents)
      })
    },1000)
  },
  onEndTripTap(){
    // 停止位置获取
    wx.stopLocationUpdate()
    // 定时器结束 
    if(this.timer){
       clearInterval(this.timer)
    }
    wx.redirectTo({
      url:routing.Mytrips()
    })
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
    wx.stopLocationUpdate()
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