import React, {useState} from "react"


const InputBtn = ({data, setData}) =>{

    const [valorInp, setValorInp] = useState("")

    const newDate = data.filter((obj) => obj.nome.toLowerCase().includes(valorInp.toLowerCase()) || obj.secao.toLowerCase().includes(valorInp.toLowerCase()))


    const styleBtnPre = {
        padding: '10px 20px',
        backgroundColor: 'Black',
        color:'white',
        marginRight: '20px',
        marginLeft: '-2px'
    }
return(
    
    <div style={{margin: ' 0px auto'}}>
        <input type="text" style={{padding:'10px',marginTop: '20px'}} value={valorInp} placeholder="Nome do Produto" onChange={(e) => setValorInp(e.target.value)}/>
        <button style={styleBtnPre} onClick={() => setData(newDate)}>Buscar</button>
    </div>
    )}

    export default InputBtn;