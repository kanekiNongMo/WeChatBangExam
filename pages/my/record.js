// pages/my/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    record: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this;
    var userId = Number(options.userId);
    wx.request({
      url: 'http://127.0.0.1:8888/score/record',
      data: {
        userId: userId
      },
      success: function(data) {
        console.log(data.data.datas)
        var record = data.data.datas;
        _this.setData({
          record: record
        })
      },
      fail: function(data) {
        wx.showToast({
          title: '网络请求失败',
          icon: 'none'
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})