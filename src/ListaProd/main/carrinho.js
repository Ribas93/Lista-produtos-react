import React, {useState} from "react";
import carrinho from "./carrinho.png";



const Carrinho = ({valorTotal,setValorTotal, add,setAdd,data}) => {
    const [mostrarCompra, setMostrarCompra] = useState(false)
    
    return(
            <>
                <div className="cesta_btn_contador">
                    <div onClick={() => setMostrarCompra(!mostrarCompra)} className="cesta_btn_div">
                        <img className="cesta_btn" src={carrinho} alt="carrinho"/>
                    </div>
                    {add.length > 0 && <div className="cesta_contador"><p className="cesta_contador_p">{add.length}</p></div> }
                    
                </div>
                {mostrarCompra === true && <div className="cesta">
                    <h3 className="cesta_valorTotal">Valor Total: R$ {valorTotal.toString()}   </h3>
                    
                    {add.map((id) => {
                    const newData = data.filter(obj => obj.id === id)
                    return(
                        <div className="cesta_img_div"  key={newData.indexOf(id)}>
                            <img className="cesta_img" alt={newData[0].nome} src={newData[0].img}/>
                            <p className="cesta_valorP">R${newData[0].preco}</p>
                        </div>
                    )})}
                    {valorTotal > 0 &&  <h3 onClick={() => {setAdd([]); setValorTotal(0)}} className="cesta_valorTotal cesta_limpar">Limpar</h3>}
                </div>}
                
        
            </>
    )
}


export default Carrinho;