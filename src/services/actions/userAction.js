import axios from "axios";
import { GET_USER_REQUEST, GET_USER_SUCCESS , GET_USER_FAILED} from "../constants/constants";

export const getAllUser = ()=>async(dispatch)=>{
   dispatch({type:GET_USER_REQUEST});
   try{
       const response=await axios.get("https://reqres.in/api/users")
       dispatch({type:GET_USER_SUCCESS,payload:response.data.data})
   }catch(error){
    dispatch({type:GET_USER_FAILED,payload:error.message})
   }
  }