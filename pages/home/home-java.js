// pages/home/home-java.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      paperList:[],
      state:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var papertype = options.papertype;
    this.getJavaPaper(papertype);
  },

  getJavaPaper: function (papertype) {
    var _this = this;
    wx.request({
      url: "http://localhost:8888/paper/getPaper",
      data: {
        paperType: papertype
      },
      success: function (data) {
        // console.log(data.data.datas)
        _this.setData({
          paperList: data.data.datas
        })
      },
      fail: function (data) {
        wx.showToast({
          title: '请求失败',
          icon: "none",
        })
      }
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
    var paperNo = event.currentTarget.dataset.paperid;
    var paperName = event.currentTarget.dataset.papername;
    // console.log(paperNo)
    // console.log(paperName)
    // wx.navigateTo({
    //   url: ''
    // })
  }
})