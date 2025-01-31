// pages/home/news/news.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0,
    scrollLeft: 0,
    newsData:''
  },
  // 跳转到详情页面
  toDetail(e) {
    console.log(e)
    var id = e.currentTarget.dataset.item.id
    var item = JSON.stringify(e.currentTarget.dataset.item)
    // 跳转到详情页面
    wx.navigateTo({
      url: '/pages/home/news/detail?id=' + id + '&item=' + item,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that = this;
    wx.request({
      url: app.globalData.apiUri + 'news/',
      method: 'GET',
      success(res) {
        if (res.statusCode == 200) {
          console.log("新闻信息获取成功", res.data)
      
          if (res.statusCode == 200 && res.data.length>0) {
            that.setData({
              newsData: res.data
            })
          } else {
            // 获取失败
          }
        }
      }
    })
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
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