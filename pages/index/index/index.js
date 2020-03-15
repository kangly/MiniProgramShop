Page({
  /**
   * 页面的初始数据
   */
  data: {
    cardCur: 0,
    swiperList: [
      {
        'id': 1,
        "thumb": 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
      },
      {
        'id': 2,
        "thumb": 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg'
      },
      {
        'id': 3,
        "thumb": 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
      }
    ],
    articles: [
      {
        'id': 1,
        'title': '原产地新鲜，香甜可口，大个红富士',
        'summary': '香甜可口红富士',
        'thumb': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584183970705&di=7b442684fad744e8414318203f02f36c&imgtype=0&src=http%3A%2F%2Fp4.pccoo.cn%2Fes_product%2F20160512%2F2016051217011351685660.jpg'
      },
      {
        'id': 2,
        'title': '河北赵州蜂蜜香甜雪梨',
        'summary': '赵州雪梨',
        'thumb': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2540143084,3109177389&fm=15&gp=0.jpg'
      },
      {
        'id': 3,
        'title': '河间驴肉火烧',
        'summary': '火烧',
        'thumb': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584184024818&di=dd5e5b19da1a163c3f3b2ccc61c6e201&imgtype=0&src=http%3A%2F%2Fp1.meituan.net%2Fdeal%2Faf287b63a717c609cc3a7221a3b2a41697515.jpg'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...'
    })
    this.towerSwiper('swiperList')
    wx.hideLoading()
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
    // this.setData({
    //   cardCur: 0,
    //   swiperList: []
    // })
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    wx.hideLoading()
    wx.stopPullDownRefresh()
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
    return {
      title: '小康商城',
      path: '/pages/index/index/index'
    }
  },

  postSearchPage: function (e) {
    wx.navigateTo({
      url: '/pages/index/search/search'
    })
  },

  postGoodsDetail: function (e) {
    // wx.navigateTo({
    //   url: ''
    // })
  },

  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  }
})