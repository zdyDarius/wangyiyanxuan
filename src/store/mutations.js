/**
 * Created by zdy on 2018/11/29.
 */
import {Get_Home_Data,Get_Topic_Data,Get_Nav_Data} from './mutations-type'
export default {
  [Get_Home_Data](state,{data}){
     state.homedata=data
  },
  [Get_Topic_Data](state,{data}){
    state.Topicdata=data
  },
 [Get_Nav_Data](state,{data}){
    state.NavData=data
 }
}
