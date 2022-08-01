import Cart from "./Cart";
import "./global.css";
import Header from "./Header"; 
import ProductsList from "./ProductsList"; 
import { useEffect, useState } from "react";
import { api } from "./API/api";
import React from "react";

function App() {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredList, setFilteredList] = useState("");
  const [cartItens, setCartItens] = useState([]);

  useEffect(() => {
    setLoading(true);
    api
      .get("products")
      .then((res) => setItemList(res))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <span>Carregando ...</span>
      ) : (
        <>
          <header >
            <Header itemList={itemList} setFilteredList={setFilteredList}></Header>
          </header>
          <main className="container"> 
            <ProductsList itemList={itemList} filteredList={filteredList} setCartItens={setCartItens} cartItens={cartItens}>
            </ProductsList>
            <aside>
              <Cart cartItens={cartItens} setCartItens={setCartItens}/>
            </aside>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
