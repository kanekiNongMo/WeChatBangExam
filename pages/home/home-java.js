// pages/home/home-java.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      paper:[
            {"lilty":"java1", "number":"222"},
            { "lilty": "java2", "number": "333" },
            { "lilty": "java3", "number": "444" },
            { "lilty": "java4", "number": "555" }
      ],
      state:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var name = options.name;
    if (name==1) {
      this.getJavaPaper(name);
    } else {
      this.getTestPaper(name);
    }
    
  },

  getJavaPaper: function (name) {
    // console.log(name)
    // wx.request({
    //   url: "http://t.yushu.im/v2/movie/top250",
    //   data: {
    //     start: start,
    //     count: 12
    //   },
    //   success: function (data) {
    //     var more = _this.data.Top250List;
    //     for (var i = 0; i < data.data.subjects.length; i++) {
    //       more.push(data.data.subjects[i])
    //     }
    //     _this.setData({
    //       showLoading: false,
    //       Top250List: more
    //     })
    //   },
    //   fail: function (data) {
    //     wx.showToast({
    //       title: '请求失败',
    //       icon: "none",
    //     })
    //   }
    // })
  },

  getTestPaper: function (name) {
    // console.log(name)
    this.setData({
      state: true
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

  }
})