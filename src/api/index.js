/**
 * Created by zdy on 2018/11/19.
 */
import ajax from './ajax'
export const reqHomeData=()=>ajax('/homedata')
export const reqTopicData=()=>ajax('/topicdata')
export const reqNavData=()=>ajax('/navdata')
