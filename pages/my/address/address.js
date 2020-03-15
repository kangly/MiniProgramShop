// pages/my/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    arraylist: [{
      id: 1,
      name: "名字",
      phone: "13800138000",
      address: "重庆市某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某",
      checked: false
    }, {
      id: 2,
      name: "名字2",
      phone: "13800138000",
      address: "重庆市某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某",
      checked: true
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  add: function (e) {
    wx.navigateTo({
      url: '/pages/my/addaddress/addaddress'
    })
  }
})