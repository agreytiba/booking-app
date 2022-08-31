import { createContext, useReducer,useEffect} from "react";

// initial state of of object{user,loading,error}
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error:null,
};

// creaate context api using initial state
export const AuthContext = createContext(INITIAL_STATE)


// autheutication reducer
const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                loading: true,
                error: null,
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                loading: false,
                error: null,
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                loading: false,
                error: action.payload,
            };
        case "REGISTER_START":
            return {
                user: null,
                loading: true,
                error: null,
            };
        case "REGISTER_SUCCESS":
            return {
                user: action.payload,
                loading: false,
                error: null,
            };
        case "REGISTER_FAILURE":
            return {
                user: null,
                loading: false,
                error: action.payload,
            };
        case "LOGOUT":
            return {
                user: null,
                loading: false,
                error: null,
            };
        default:
            return state
     }
}


// to aviod boilerplate code to index.js  file in main
//  we use this function as authotication content provider

export const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer( AuthReducer, INITIAL_STATE)
    
    useEffect(() => {
      localStorage.setItem("user",JSON.stringify(state.user))
    
    },[state.user])

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                loading: state.loading,
                error: state.error,
                dispatch,
            }}
        >
        {children}
        </AuthContext.Provider>
    )
}