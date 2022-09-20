import React, {useState} from "react";

const BtnVer = ({data, setData}) => {

    const newData = data.filter((obj) => obj.secao === 'Hortifruti')
    const styleBtnVer = {
        padding: '12px 20px',
        borderRadius: '3px',
        backgroundColor: 'maroon',
        border: 'none',
        color:'white',
        margin: '20px'
    }

    return(
       
        <button onClick={() => setData(newData)} style={styleBtnVer}>Mostrar Hortifrutti</button>
    )
}

export default BtnVer;