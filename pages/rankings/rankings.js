// pages/rankings/rankings.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rangking: [],
    javaRangking: [],
    testRangking: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: 'http://127.0.0.1:8888/score/ranking',
      // data: {
      //   start: 0,
      //   limit: 3
      // },
      success: function (data) {
        console.log(data.data);
        _this.setData({
          rangking: data.data
        })
      },
      fail: function (data) {
        wx.showToast({
          title: '网络请求失败',
          icon: 'none'
        })
      }
    }),
      wx.request({
        url: 'http://127.0.0.1:8888/score/ranking',
        data: {
          // start: 0,
          // limit: 3,
          majorType: 1
        },
        success: function (data) {
          console.log(data.data);
          _this.setData({
            javaRangking: data.data
          })
        },
        fail: function (data) {
          wx.showToast({
            title: '网络请求失败',
            icon: 'none'
          })
        }
      }),
      wx.request({
        url: 'http://127.0.0.1:8888/score/ranking',
        data: {
          // start: 0,
          // limit: 3,
          majorType: 2
        },
        success: function (data) {
          console.log(data.data);
          _this.setData({
            testRangking: data.data
          })
        },
        fail: function (data) {
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
  onOpenRankingDetail: function (event) {
    var ranking = event.currentTarget.dataset.ranking;
    console.log(ranking);
    wx.setStorage({
      key: "ranking",
      data: ranking
    })
    wx.setStorage({
      key: "javaRangking",
      data: ranking
    })
    wx.setStorage({
      key: "testRangking",
      data: ranking
    })
    wx.navigateTo({
      url: "./rankings-detail"
    })
  }
})