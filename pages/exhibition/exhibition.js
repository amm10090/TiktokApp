Page({
  data: {
    categories: [
      { id: 1, name: '全部商品', icon: '/images/all.png' },
      { id: 2, name: '密封条', icon: '/path/to/icon2.png' },
      { id: 3, name: '工具', icon: '/path/to/icon3.png' },
      // 添加更多类别，确保每个类别项包含 `icon` 属性
    ],
    products: [
      { id: 1, image: '/images/main/main.jpg', name: 'Black Simple Lamp', price: 12.00, category: 1 },
      { id: 2, image: '/images/main/main2.jpg', name: 'Minimal Stand', price: 25.00, category: 1 },
      { id: 3, image: '/images/product3.jpg', name: 'Coffee Chair', price: 20.00, category: 2 },
      { id: 4, image: '/images/product4.jpg', name: 'Simple Desk', price: 50.00, category: 3 },
      // 添加更多产品
    ],
    filteredProducts: []
  },
  onLoad: function() {
    this.setData({
      filteredProducts: this.data.products
    });
  },
  filterProducts: function(event) {
    const category = event.currentTarget.dataset.category;
    const filteredProducts = this.data.products.filter(product => product.category === category);
    this.setData({
      filteredProducts: filteredProducts
    });
  }
});
