/**
 * Created by zdy on 2018/11/29.
 */
export default {
  NavList (state) {
    let arr=[]
    state.NavData.forEach((item,index)=>{
      arr.push(item.name)
    })
    return arr
  },
  NavInfo (state) {
    let arr=[]
    state.NavData.forEach((item,index)=>{
      arr.push({name:item.name,url:item.wapBannerUrl,list:item.subCateList})
    })
    return arr
  }
}
