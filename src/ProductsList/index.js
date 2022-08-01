import React from "react";
import Products from "./Products";

function ProductsList({ itemList, filteredList, setCartItens, cartItens}) {

  return (
    <div className="ProductsList">
      {filteredList.length > 0 ? (
        <>
          {filteredList.map((item) => (
            <Products
              name={item.name}
              key={item.id}
              id={item.id}
              img={item.img}
              category={item.category}
              price={item.price}
              setCartItens={setCartItens}
              itemList={itemList}
              cartItens={cartItens}
            ></Products>
          ))}
        </>
      ) : (
        <>
          {itemList?.data?.map((item) => (
            <Products
              name={item.name}
              key={item.id}
              img={item.img}
              category={item.category}
              price={item.price}
            ></Products>
          ))}
        </>
      )}

      <div className="container"></div>
    </div>
  );
}

export default ProductsList;
