Page({
  //获取java后台的数据
  getData(){
    let that = this
    wx.request({
      url: 'http://localhost:8080/hello',
      success(res){
        console.log("请求成功",res.data)
        that.setData({
          datalist:res.data
        })
      },
      fail(res){
        console.log("请求失败",res)
      }

    })
  }
})