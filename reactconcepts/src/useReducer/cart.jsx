import React, { useState } from "react";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const [discount, setDiscount] = useState(0);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  };

  const removeItemFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateItemQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id == id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const applyDiscount = (discountCode) => {
    if (discountCode === "SAVE20") {
      setDiscount(20);
    } else {
      setDiscount(0);
    }
  };

  const total =
    cartItems.reduce((acc, item) => {
      acc + item.price * item.quantity;
    }, 0) - discount;
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
        {cartItems.map((item) => (
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
