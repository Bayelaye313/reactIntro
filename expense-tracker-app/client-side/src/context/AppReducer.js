const REMOVE_TRANSACT = 'REMOVE_TRANSACT'
const ADD_TRANSACT = 'ADD_TRANSACT'


const AppReducer = (state, action) => {

    switch (action.type) {
        case REMOVE_TRANSACT: 
            return{
                ...state,
                transactions: state.transactions.filter((tr)=> tr.id !== action.payload)
            }
            case ADD_TRANSACT: 
            return{
                ...state,
                transactions:[...state.transactions, {...action.payload}]
            }               
              
        default:
            return  state;
    }
 
}

export default AppReducer
