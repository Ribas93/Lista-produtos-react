import React, {useState} from "react"


const BtnCin = ({setData, data}) => {
    const styleBtnCin = {
        padding: '12px 20px',
        borderRadius: '3px',
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        margin: '20px',
    }

    return(
    <button onClick={() => setData(data)} style={styleBtnCin}>Mostrar Todos</button>
    )
}

export default BtnCin;