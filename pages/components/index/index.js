// pages/index/index.js
var navData = require("../data/data.js")
var imgUrls = require("../data/data.js")
var app = getApp();
Page({
  data: {
    winHeight: "", //窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    region: ['请选择', '请选择', '南明区'],
    customItem: '请选择', //为每一列的顶部添加一个自定义的项
    inputValue: ''
  },
  // 滚动切换标签样式
  switchTab: function(e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function(e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function() {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  //省市区选择器：
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  onLoad: function() {
    var that = this;
    // 导入data数据
    that.setData({
      navData: navData.navData,
      imgUrls: imgUrls.imgUrls
    })
    // 高度自适应
    wx.getSystemInfo({
      success: function(res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        // var calc = clientHeight * rpxR - 120;
        var calc = clientHeight * rpxR;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });
  },
  footerTap: app.footerTap
})