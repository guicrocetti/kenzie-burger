import React from "react";

function CartTotal({ setCartItens, cartItens }) {
  return (
    <div className="CartTotal">
      <div className="container small">
        <h3>Total</h3>
        <span>
          R${" "}
          {cartItens
            .reduce((acc, { price }) => acc + price, 0)
            .toLocaleString("pt-br", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
        </span>
      </div>
      <button className="removeAll" onClick={() => setCartItens([])}>
        Remover todos
      </button>
    </div>
  );
}

export default CartTotal;
