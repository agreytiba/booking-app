import { createContext, useReducer} from "react";

// initial state of the search component
const INITIAL_STATE = {
    city: undefined,
    dates: [],
    options: {
        adult: undefined,
        children: undefined,
        room: undefined,
    }
};

// create searchcontext
export const SearchContext = createContext(INITIAL_STATE)

// search reducer which handle state changes 
const SearchReducer = (state, action) => {
    switch (action.type) {
        case "NEW_SEARCH":
            return action.payload
        case "RESET_SEARCH":
            return INITIAL_STATE
        default:
            return state
     }
}

// to avoid complex code to the index.js file
// we use this function contain context api provider and the values
 
export const SearchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE)
    return (
        <SearchContext.Provider
            value={{
                city: state.city,
                dates: state.dates,
                options: state.options,
                dispatch,
            }}
        >
        {children}
        </SearchContext.Provider>
    )
}