import { GET_USER_FAILED, GET_USER_REQUEST, GET_USER_SUCCESS } from "../constants/constants";

const initialState={
    isloading:false,
    users:[],
    error:null
}

export const userReducer=(state=initialState,action)=>{
switch (action.type) {
    case GET_USER_REQUEST:
        return{
            ...state,
            isloading:true
        }

    case GET_USER_SUCCESS:
        return{
            ...state,
            isloading:false,
            users:action.payload
        }    

    case GET_USER_FAILED:
        return{
            ...state,
            isloading:false,
            error:action.payload
            
        }  

    default:
        return state;
}
}