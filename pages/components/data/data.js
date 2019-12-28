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
  url: '/pages/images/banner-1.jpg'
  }, {
    link: '/pages/list/list',
    url: '/pages/images/banner-3.jpg'
  }, {
    link: '/pages/list/list',
    url: '/pages/images/banner-4.jpg'
  }, {
    link: '/pages/list/list',
    url: '/pages/images/banner-5.jpg'
  }]

module.exports = {
  navData: navData,
  imgUrls: imgUrls
}