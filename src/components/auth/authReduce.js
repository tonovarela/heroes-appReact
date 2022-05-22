
import { types } from "../types/types";
// const state ={
//     nombre:'Varera',
//     logged:true
// }
export const  authReducer =(state={},action)=>{
  console.log("llamando");
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged:true
            }
        case types.logout:
            return {
                logged:false
            }            
        default:
            return  state;
            
    }


}