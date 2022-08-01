import React from "react";
import CartProduct from "./CartProduct";
import CartTotal from "./CartTotal";
import "./style.css";

function Cart({ cartItens, setCartItens }) {
  return (
    <div className="Cart">
      <h2>Carrinho de Compras</h2>
      <div className="container">
        {cartItens.length > 0 ? (
          <>
            <CartProduct
              cartItens={cartItens}
              setCartItens={setCartItens}
            ></CartProduct>
            <CartTotal
              setCartItens={setCartItens}
              cartItens={cartItens}
            ></CartTotal>
          </>
        ) : (
          <div className="empty">
            <h1>Sua sacola está vazia</h1>
            <p>Adicione itens</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
