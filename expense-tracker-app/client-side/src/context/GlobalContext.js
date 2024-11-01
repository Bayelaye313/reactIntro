import { createContext, useReducer } from "react"
import AppReducer from "./AppReducer";

const REMOVE_TRANSACT = 'REMOVE_TRANSACT'
const ADD_TRANSACT = 'ADD_TRANSACT'


const initialState = {
    transactions: [
           
         ]
}

export const GlobalContext = createContext(initialState);

const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const deleteTransact = (id)=>{
        dispatch({type: REMOVE_TRANSACT,
            payload: id
        })
    }
    const addTransact = (transact)=>{
        dispatch({type: ADD_TRANSACT,
            payload: transact
        })
    }


    return (
        <GlobalContext.Provider  value={{transactions: state.transactions, deleteTransact, addTransact }} >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider