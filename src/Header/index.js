import React from "react";
import logo from "../Image/logo.svg";
import { useState, useEffect } from "react";

function Header({ itemList, setFilteredList }) {
  const [inputValue, setInputValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    isItVisible();
    filterItens(); // eslint-disable-next-line
  }, [inputValue ]); 

  function filterItens() {
    const filtered = itemList?.data?.filter((ele) =>
      ele.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
    );
    setSearchResult(filtered);
    setFilteredList(filtered)
  }

  function isItVisible() {
    if (inputValue.length > 0) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  }

  return (
    <div className="Header">
      <div className="container header">
        <img className="logo" src={logo} alt="logo"></img>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type={"search"}
            placeholder={"digitar pesquisa..."}
            onChange={(event) => setInputValue(event.target.value)}
            value={inputValue}
          ></input>
          <button onClick={() => filterItens()}>Pesquisar</button>
          {modalVisible && searchResult.length > 0 ? (
            <div className="modalSearch">
              {searchResult.map((ele) => (
                <li id={ele.name} onClick={(e) => setInputValue(e.target.id)}>
                  <img id={ele.name} src={ele.img} alt={ele.name}></img>
                  <h1 id={ele.name}>{ele.name}</h1>
                </li>
              ))}
            </div>
          ) : (modalVisible && (<ul className="modalSearch"><li>Nenhum item encontrado</li></ul>))}
        </form>
      </div>
    </div>
  );
}

export default Header;
