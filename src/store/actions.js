/**
 * Created by zdy on 2018/11/29.
 */
import {reqHomeData,reqNavData,reqTopicData} from '../api'
import {Get_Home_Data,Get_Topic_Data,Get_Nav_Data} from './mutations-type'
export default {
 async gethomedata({commit}){
    const result=await reqHomeData()
   console.log(result)
    commit(Get_Home_Data,{data:result.data})
  },

async getTopicData({commit}){
  const result=await reqTopicData()
  console.log(result)
  commit(Get_Topic_Data,{data:result.data})
},
async getNavData({commit}){
  const result=await reqNavData()
  commit(Get_Nav_Data,{data:result.data})
}
}
