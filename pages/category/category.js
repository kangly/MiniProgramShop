const app = getApp()
Page({
  data: {
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    list: [
      {
        'id': 1,
        'name': '水果'
      },
      {
        'id': 2,
        'name': '蔬菜'
      },
      {
        'id': 3,
        'name': '零食'
      },
      {
        'id': 4,
        'name': '粮油'
      }, 
      {
        'id': 5,
        'name': '加工'
      },
      {
        'id': 6,
        'name': '酒饮'
      },
      {
        'id': 7,
        'name': '乳品'
      },
      {
        'id': 8,
        'name': '肉蛋'
      },
      {
        'id': 9,
        'name': '海鲜'
      },
      {
        'id': 10,
        'name': '熟食'
      },
      {
        'id': 11,
        'name': '美食'
      }
    ],
    content: [
      {
        'id': 1,
        'name': '测试1测试1测试1测试1测试1',
        'summary': '这是一条测试数据1',
        'tags': '水果 香甜',
        'thumb': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2540143084,3109177389&fm=15&gp=0.jpg'
      },
      {
        'id': 2,
        'name': '测试2',
        'summary': '这是一条测试数据2',
        'tags': '水果 香甜',
        'thumb': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2540143084,3109177389&fm=15&gp=0.jpg'
      },
      {
        'id': 2,
        'name': '测试2',
        'summary': '这是一条测试数据2',
        'tags': '水果 香甜',
        'thumb': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2540143084,3109177389&fm=15&gp=0.jpg'
      },
      {
        'id': 2,
        'name': '测试2',
        'summary': '这是一条测试数据2',
        'tags': '水果 香甜',
        'thumb': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2540143084,3109177389&fm=15&gp=0.jpg'
      },
      {
        'id': 2,
        'name': '测试2',
        'summary': '这是一条测试数据2',
        'tags': '水果 香甜',
        'thumb': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2540143084,3109177389&fm=15&gp=0.jpg'
      },
      {
        'id': 2,
        'name': '测试2',
        'summary': '这是一条测试数据2',
        'tags': '水果 香甜',
        'thumb': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2540143084,3109177389&fm=15&gp=0.jpg'
      },
      {
        'id': 2,
        'name': '测试2',
        'summary': '这是一条测试数据2',
        'tags': '水果 香甜',
        'thumb': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2540143084,3109177389&fm=15&gp=0.jpg'
      },
      {
        'id': 2,
        'name': '测试2',
        'summary': '这是一条测试数据2',
        'tags': '水果 香甜',
        'thumb': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2540143084,3109177389&fm=15&gp=0.jpg'
      },
      {
        'id': 2,
        'name': '测试2',
        'summary': '这是一条测试数据2',
        'tags': '水果 香甜',
        'thumb': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2540143084,3109177389&fm=15&gp=0.jpg'
      },
      {
        'id': 2,
        'name': '测试2',
        'summary': '这是一条测试数据2',
        'tags': '水果 香甜',
        'thumb': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2540143084,3109177389&fm=15&gp=0.jpg'
      },
      {
        'id': 2,
        'name': '测试2',
        'summary': '这是一条测试数据2',
        'tags': '水果 香甜',
        'thumb': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2540143084,3109177389&fm=15&gp=0.jpg'
      },
      {
        'id': 2,
        'name': '测试2',
        'summary': '这是一条测试数据2',
        'tags': '水果 香甜',
        'thumb': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2540143084,3109177389&fm=15&gp=0.jpg'
      },
    ],
    load: true
  },
  onLoad() {
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
  },
  onReady() {
    wx.hideLoading()
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id - 1,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
    if (e.currentTarget.dataset.id>1){
      this.setData({
        content: [
          {
            'id': 1,
            'name': '测试石述思十四号四十四身上',
            'summary': '这是一条测试数据1',
            'tags': '水果 香甜',
            'thumb': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2540143084,3109177389&fm=15&gp=0.jpg'
          },
        ]
      })
    }
  }
})