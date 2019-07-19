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
                 ],
      paperNumber:222,
      javaNumber:333,
      testNumber:444
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPaperNumber();
    this.getJavaNumber();
    this.getTestNumber();
  },

  getPaperNumber: function () {
    var _this = this;
    wx.request({
      url: "http://localhost:8888/questions/countQuestion",
      method: "POST",
      success: function (data) {
        // console.log(data.data)
        _this.setData({
          paperNumber:data.data
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

  getJavaNumber: function () {
    var _this = this;
    wx.request({
      url: "http://localhost:8888/questions/countQuestion",
      method: "POST",
      dataType: "json",
      header:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data:{
        genre: 1
      },
      success: function (data) {
        // console.log(data.data)
        _this.setData({
          javaNumber: data.data
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

  getTestNumber: function () {
    var _this = this;
    wx.request({
      url: "http://localhost:8888/questions/countQuestion",
      method: "POST",
      dataType: "json",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        genre: 2
      },
      success: function (data) {
        // console.log(data.data)
        _this.setData({
          testNumber: data.data
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

  /**
   * 跳转我要刷题界面
   */
  onOpenTopic: function (event) {
    var javaNumber = event.currentTarget.dataset.javanumber;
    var testNumber = event.currentTarget.dataset.testnumber;
    wx.navigateTo({
      url: './home-topic?javanumber=' + javaNumber +'&testnumber=' + testNumber,
    })
  },
  onOpenJava: function (event) {
    var papertype = event.currentTarget.dataset.papertype;
    wx.navigateTo({
      url: './home-java?papertype=' + papertype,
    })
  },
})