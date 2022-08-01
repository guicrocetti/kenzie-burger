import React from "react";

function CartProduct({ cartItens, setCartItens }) {
  function handleRemoveItem(item) {
    const data = cartItens.filter((ele) => ele.name !== item);
    setCartItens([...data]);
  }

  return (
    <div className="CartProduct">
      <div className="container">
        {cartItens.map((ele, index) => (
          <>
            <div className="CartItem" key={index}>
              <img src={ele.img} alt="X-Burger"></img>
              <div className="CartInfo">
                <h4>{ele.name}</h4>
                <p>
                  R$
                  {ele.price.toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
              <span
                id={ele.name}
                className="removeItem"
                onClick={(e) => handleRemoveItem(e.target.id)}
              >
                Remover
              </span>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default CartProduct;
