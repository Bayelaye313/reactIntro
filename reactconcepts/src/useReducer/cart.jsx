import React, { useReducer, useState } from "react";
import CartReducer from "./CartReducer";
// Définir les actions possibles
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";
const APPLY_DISCOUNT = "APPLY_DISCOUNT";

function ShoppingCart() {
  //   const [cartItems, setCartItems] = useState([]);
  //   const [discount, setDiscount] = useState(0);
  const initialState = { cartItems: [], discount: 0 };
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addItemToCart = (item) => {
    dispatch({ type: ADD_ITEM, item });
  };

  const removeItemFromCart = (id) => {
    dispatch({ type: REMOVE_ITEM, id });
  };

  const updateItemQuantity = (id, quantity) => {
    dispatch({ type: UPDATE_QUANTITY, id, quantity });
  };

  const applyDiscount = (discountCode) => {
    dispatch({ type: APPLY_DISCOUNT, discountCode });
  };

  const total =
    state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) -
    state.discount;
  return (
    <div>
      <h2>Shopping Cart</h2>
      <button
        onClick={() => addItemToCart({ id: 1, name: "Product A", price: 100 })}
      >
        Add Product A
      </button>
      <button
        onClick={() => addItemToCart({ id: 2, name: "Product B", price: 150 })}
      >
        Add Product B
      </button>

      <ul>
        {state.cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} pcs
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Discount code"
        onBlur={(e) => applyDiscount(e.target.value)}
      />
      <p>Total: ${total}</p>
    </div>
  );
}

export default ShoppingCart;
