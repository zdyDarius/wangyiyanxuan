/**
 * Created by zdy on 2018/11/29.
 */
import {Get_Home_Data} from './mutations-type'
export default {
  [Get_Home_Data](state,{data}){
     state.homedata=data
  }
}
