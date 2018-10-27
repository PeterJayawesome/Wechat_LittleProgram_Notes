//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  globalData: {
    userInfo: null,
    testList: [
      {
        style: "",
        txt: "记录0爱思帝哈佛阿尔山日剧·爱欧迪金佛阿伟熔护甲·a的法务耦合"
      },
      {
        style: "",
        txt: "记录1开欧式地附近啊杀神风噶啥的瓜娃儿斯蒂芬V出售的分公司但如果"
      },
      {
        style: "",
        txt: "记录2开欧式地附近啊杀神风噶啥的瓜娃儿斯蒂芬V出售的分公司但如果"
      },
      {
        style: "",
        txt: "记录3开欧式地附近啊杀神风噶啥的瓜娃儿斯蒂芬V出售的分公司但如果"
      },
      {
        style: "",
        txt: "记录4开欧式地附近啊杀神风噶啥的瓜娃儿斯蒂芬V出售的分公司但如果"
      },
      {
        style: "",
        txt: "记录5开欧式地附近啊杀神风噶啥的瓜娃儿斯蒂芬V出售的分公司但如果"
      },
      {
        style: "",
        txt: "记录6开欧式地附近啊杀神风噶啥的瓜娃儿斯蒂芬V出售的分公司但如果"
      },
      {
        style: "",
        txt: "记录7开欧式地附近啊杀神风噶啥的瓜娃儿斯蒂芬V出售的分公司但如果"
      },
    ],
  }
})