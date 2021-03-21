import { GET_USER, 
  GET_USER_BY_ID,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER,
 USER_REGISTER_SUCCESS,
 GET_PROFILE,
 GET_PROFILE_SUCCESS,
 GET_PROFILE_FAIL,
 USER_LOGIN_FAIL,


  



} from "../Constant/actionTypes";

const initialState  = {
  users: [],
  userById:{},
  
  loading: false,
  errors: null,
  isAuth: false,
};

const reducerUser = (state = initialState , { type, payload }) => {
   switch (type) {
            case USER_REGISTER:
            case USER_LOGIN:
            case GET_PROFILE:
                  return {
                        ...state,
                        loading: true
                  };
            
            case USER_REGISTER_SUCCESS:
                  return {
                        ...state,
                        loading: false,
                        user: payload,
                  };
            
            case USER_LOGIN_SUCCESS:
                  return {
                        ...state,
                        loading: false,
                        token: payload,
                        isAuth:true,
                  };
            
            case GET_PROFILE_SUCCESS:
                  return {
                        ...state,
                        loading: false,
                        users: payload,
                        isAuth: true,
                  };
            
            case USER_REGISTER_FAIL:
            
            
                  return {
                        ...state,
                        loading: false,
                        errors: payload
                  };
            case GET_PROFILE_FAIL:
            case USER_LOGIN_FAIL:
                  return {
                        ...state,
                        loading: false,
                        errors: payload,
                        isAuth:false
                        
                  }
            
            
            default:
                  return state;
            
      }
}

export default reducerUser
