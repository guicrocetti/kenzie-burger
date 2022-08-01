import React from "react";

function Products({ name, img, category, price, setCartItens, itemList, cartItens, id }) {
  function handleCartAdd(itemId){
    const data = itemList?.data?.filter(ele => ele.id === Number.parseInt(itemId))
    const cartData = cartItens.filter(ele => ele.id === Number.parseInt(itemId))
    
    if(cartData.length === 0) {
      setCartItens([...cartItens,...data])
  }}

  return (
    <div className="Products">
      <img src={img} alt={name} />
      <div className="Products small">
        <h3>{name}</h3>
        <p>{category}</p>
        <span>
          R${" "}
          {price.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
        <button id={id} onClick={(e) => handleCartAdd(e.target.id)}>Adicionar</button>
      </div>
    </div>
  );
}

export default Products;
