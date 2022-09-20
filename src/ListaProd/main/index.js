import React,{useState} from "react";
import Carrinho from "./carrinho";
import Cards from "./cards";



const Main = ({data,listaProd, setLista}) => {
     const [add, setAdd] = useState([])
     const [valorTotal, setValorTotal] = useState(0)
    return(
        <main >
             <Cards valorTotal={valorTotal} setValorTotal={setValorTotal} data={listaProd} add={add} setAdd={setAdd}/>
             <hr/>
             <Carrinho valorTotal={valorTotal} setValorTotal={setValorTotal} add={add} setAdd={setAdd} data={data}/>
       </main>
    )
}

export default Main;