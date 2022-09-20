import React, {useState} from "react";
import Header from "./header";
import Main from "./main";
import data from "./data";

const ListaProdutos = () => {
  
  
    const [listaProd, setListaProd] = useState([])


    return(
       <>
       <Header data={data} setData={setListaProd}/>
       <Main data={data} listaProd={listaProd} setLista={setListaProd}/>
       </>
    )   
}


export default ListaProdutos;