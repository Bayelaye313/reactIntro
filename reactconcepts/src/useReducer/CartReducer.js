
// Définir les actions possibles
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";
const APPLY_DISCOUNT = "APPLY_DISCOUNT";

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, {...action.item, quantity:1} ]
            }
    case REMOVE_ITEM:
        return{
            ...state,
            cartItems: state.cartItems.filter((item)=> item.id !== action.id)  
        }
    case UPDATE_QUANTITY:
        return{
            ...state,
            cartItems: state.cartItems.map((item)=> item.id === action.id ? {...item, quantity : action.quantity} : item)
        }
        case APPLY_DISCOUNT:
            const rabais = action.discountCode === "SAVE20" ? 20 : 0; // Check if the discount code is "SAVE20"
            return {
              ...state,
              discount: rabais // Apply the discount to the state
            };
            
    default:
        return state;
  }
}

export default CartReducer
