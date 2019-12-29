/**
 * 创建导航条数据
 */
var navData = [{
    text: '热销'
  },
  {
    text: '现货'
  },
  {
    text: '酒饮'
  },
  {
    text: '美护'
  },
  {
    text: '餐厨'
  },
  {
    text: '出行'
  },
  {
    text: '青葱'
  },
  {
    text: '上课'
  }
]
/**
 * 创建banner数据
 */
var imgUrls =  [
  {
  link: '/pages/index/index',
  url: '/pages/images/1.png'
  }, {
    link: '/pages/list/list',
    url: '/pages/images/4.png'
  }, {
    link: '/pages/list/list',
    url: '/pages/images/6.png'
  }]

/**
 * 创建商品数据
 */
var goodsLists = [
  {
    gname: '奇欧比 巧克力松露抹茶酒心味夹心奶糖',
    gprice: 49.99,
    gimg: '/pages/images/goods.png'
  },
  {
    gname: '奇欧比 巧克力松露抹茶酒心味夹心奶糖',
    gprice: 47.99,
    gimg: '/pages/images/goods.png'
  },
  {
    gname: '奇欧比 巧克力松露抹茶酒心味夹心奶糖',
    gprice: 48.69,
    gimg: '/pages/images/goods.png'
  }
]

module.exports = {
  navData: navData,
  imgUrls: imgUrls,
  goodsLists: goodsLists
}