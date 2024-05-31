// index.js
Page({
  data: {
    headerTitle: "产品列表",
    menuItems: [
      { text: "全部商品", active: true },
      { text: "密封条", active: false },
      { text: "工具", active: false },
    ],
    products: [
      { name: "胶条铲子",  image: "/images/main/main.jpg", categories: ["全部商品","工具"] },
      { name: "丁晴密封条", price: 25.00, image: "/images/main/main2.jpg", categories: ["全部商品", "密封条"]},
      { name: "Coffee Chair", price: 20.00, image: "path/to/chair.jpg", categories: ["全部商品", "工具"] },
      { name: "Simple Desk", price: 50.00, image: "path/to/desk.jpg", categories: ["全部商品","工具"] }
    ],
    filteredProducts: [],
    menuVisible: false,
    menuToggleText: "全部分类"
  },

  onLoad() {
    this.filterProducts("全部商品");
  },
  
  toggleMenu() {
    const newMenuVisible = !this.data.menuVisible;
    this.setData({
      menuVisible: newMenuVisible,
      menuToggleText: newMenuVisible ? "全部分类" : "展开分类"
    });
  },

  selectMenuItem(e) {
    const index = e.currentTarget.dataset.index;
    const selectedCategory = this.data.menuItems[index].text;
    const menuItems = this.data.menuItems.map((item, idx) => {
      item.active = idx === index;
      return item;
    });
    this.setData({ menuItems });
    this.filterProducts(selectedCategory);
  },

  filterProducts(category) {
    let filteredProducts = this.data.products;
    if (category !== "全部商品") {
      filteredProducts = this.data.products.filter(product => product.categories.includes(category));
    }
    this.setData({ filteredProducts });
  }
})
