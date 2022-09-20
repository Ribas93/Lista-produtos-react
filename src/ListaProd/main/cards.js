import React, {useState} from "react";


const Cards = ({valorTotal,setValorTotal,data, setAdd, add}) => {
    return(
        <ul className="card_div">
                {data.map((obj) => 
                    <li className="card">
                        <h3  className="card_titulo" >{obj.nome}</h3>
                        <img className="card_img" alt={obj.nome} src={obj.img}/>
                        <p className="card_valor"><strong>R${obj.preco}</strong></p>
                        <span className="card_secao">{obj.secao}</span>
                        <button className="card_btn" id={obj.id }
                        onClick={() => {setAdd([...add, obj.id]); setValorTotal(valorTotal += obj.preco)}} >
                            Selecionar
                        </button>
                    </li>
                )}
        </ul>
    )
}


export default Cards;