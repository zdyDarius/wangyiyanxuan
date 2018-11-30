/**
 * Created by zdy on 2018/11/29.
 */
import {reqHomeData,reqNavData,reqTopicData} from '../api'
import {Get_Home_Data} from './mutations-type'
export default {
 async gethomedata({commit}){
    const result=await reqHomeData()
   console.log(result)
    commit(Get_Home_Data,{data:result.data})
  }
}
