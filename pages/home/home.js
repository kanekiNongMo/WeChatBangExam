// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerImage: ["../../images/home/home-swiper1.jpeg",
                  "../../images/home/home-swiper2.jpeg",
                  "../../images/home/home-swiper3.jpeg",
                  "../../images/home/home-swiper4.jpeg",
                  "../../images/home/home-swiper5.jpeg"
                 ]
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

  /**
   * 跳转我要刷题界面
   */
  onOpenTopic: function (event) {
    wx.navigateTo({
      url: './home-topic',
    })
  },
  onOpenJava: function (event) {
    var name = event.currentTarget.dataset.name;
    // console.log(name)
    wx.navigateTo({
      url: './home-java?name=' + name,
    })
  },
  onOpenTest: function (event) {
    var name = event.currentTarget.dataset.name;
    // console.log(name)
    wx.navigateTo({
      url: './home-java?name=' + name,
    })
  },
})