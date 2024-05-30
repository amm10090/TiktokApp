Page({
  data: {
    banners: [
      { src: '/images/main.jpg', title: '压胶条神器', subtitle: '胶条安装铲', date: '' },
      { src: '/images/main2.jpg', title: '丁晴密封条', subtitle: '耐油耐磨缓震', date: '2023.7.1 - 2023.12.31' }
    ],
    buttons: [
      { text: '公司介绍', icon: '/images/ticket.png' },
      { text: '联系我们', icon: '/images/guide.png' }
    ],
    products: [
      {
        id: 1,
        image: '/images/main.jpg', // 图片路径，可以是网络地址或本地路径
        name: '胶条安装铲',
        description: '产品介绍1'
      },
      {
        id: 2,
        image: '/assets/product2.jpg',
        name: '产品名称2',
        description: '产品介绍2'
      },
      {
        id: 3,
        image: '/assets/product3.jpg',
        name: '产品名称3',
        description: '产品介绍3'
      },
      // 继续添加更多产品信息
    ]
  },
  onLoad: function () {
    console.log('Index Page Loaded');
  }
});
