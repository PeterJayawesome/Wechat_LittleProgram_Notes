//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list: [],
    text: "",
    startX: "",
    delBtnWidth: 180,
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function () {
    // 读取删除键宽度
    this.initBtnWidth();
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  onReady: function () {
    // 读取缓存中的记录
    var list = wx.getStorageSync("notes");
    // var list = app.globalData.testList;
    if (list) {
      this.setData({
        list: list
      })
    }
  },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },
  onTap: function(e) {
    // console.log(e.target.dataset.isdel);
    if(e.touches.length == 1) {
      var index = e.target.dataset.index;
      var list = this.data.list;
      // 判断是否点击的删除按键
      if(e.target.dataset.isdel == "true"){
        list.splice(index,1);
        wx.setStorage({
          key: "notes",
          data: list,
        });
        this.setData({
          list: list
        });
      } else {
        // 点击记录txt展开
        // const query = wx.createSelectorQuery();
        // var getHeight = query.select('#txt'+index).boundingClientRect((rect)=>{
        //   list[index].delStyle = "line-height:"+rect.height+"px";
          // console.log(list);
        //   this.setData({
        //     list:list
        //   });
        // });
        if(list[index].open) {
          list[index].open = false;
        }else {
          list[index].open = true;
        }
        this.setData({
          list:list
        });
        // getHeight.exec();
      }
    }
  },
  // 触摸事件开始
  touchS: function(e) {
    // console.log(e);
    // 触摸事件在记录txt上
    if(e.touches.length == 1 && e.target.dataset.isdel=="false") {
      this.setData({
        startX: e.touches[0].clientX
      })
    }
  },
  touchM: function(e) {
    // console.log(e.target.dataset.isdel);
    if(e.touches.length == 1 && e.target.dataset.isdel=="false"){
      var currX = e.touches[0].clientX;
      // 当前触摸点与起始点距离
      var disX = this.data.startX - currX;
      var delBtnWidth = this.data.delBtnWidth;
      var style = "";
      // 向左划超过删除键宽度
      if(disX >= delBtnWidth) {
        style = "left:-"+delBtnWidth+"px";
      }else if(disX > 0) {
        // 向左滑小于键宽
        style = "left:-"+disX+"px";
      }
      var index = e.target.dataset.index;
      var list = this.data.list;
      list[index].style = style;
      this.setData({
        list: list
      });
    }
  },
  touchE: function(e) {
    // console.log(!e.target.dataset.isdel);
    if(e.changedTouches.length == 1 && e.target.dataset.isdel=="false") {
      // var endX = e.changedToucheds[0].clientX;
      var disX = this.data.startX - e.changedTouches[0].clientX;
      var delBtnWidth = this.data.delBtnWidth;
      // 左滑超过键宽1/2时展开
      var style = disX > delBtnWidth/2 ? "left:-"+delBtnWidth+"px" : "";
      var index = e.target.dataset.index;
      var list = this.data.list;
      list[index].style = style;
      this.setData({
        list:list
      });
      // console.log(list);
    }
  },
  textConfirm: function(e) {
    var content = e.detail.value;
    var list = this.data.list;
    list.push({txt:content,style:"",open:""});
    // 存入本地缓存
    wx.setStorage({
      key: 'notes',
      data: list,
    });
    this.setData({
      list: list,
      text: ""
    });
  },
  initBtnWidth: function() {
    var real = 0;
    try {
      var res = wx.getSystemInfoSync().windowWidth;
      // 根据比例算出删除键宽
      var scale = 750 / this.data.delBtnWidth;
      real = Math.floor(res/scale);
      this.setData({
        delBtnWidth: real
      });
    } catch(e) {
      // console.log(e);
      return false;
    }
  }
})
