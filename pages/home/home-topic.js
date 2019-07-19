// pages/home/home-topic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    javaNumber:0,
    testNumber:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var javanumber = options.javanumber;
    var testnumber = options.testnumber;
    this.setData({
      javaNumber: javanumber,
      testNumber: testnumber
    })
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

  onOpenAnswer: function (event) {
    var paperNo = event.currentTarget.dataset.random;
    console.log(paperNo)
    // wx.navigateTo({
    //   url: ''
    // })
  }
})