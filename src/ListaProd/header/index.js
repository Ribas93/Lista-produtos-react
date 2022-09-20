import React, {useState} from "react"
import BtnVer from "./btnVer"
import BtnCin from "./btnCin"
import InputBtn from "./inputBtn"
import data from "../data"


const Header = ({setData, data}) => {
    
    

    const style = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: '15px'
    }
        

    return(
        <>
        <header style={style}>
           <BtnCin data={data} setData={setData}/>
           <BtnVer data={data} setData={setData}/>
           <InputBtn data={data} setData={setData}/>
        </header>
        </>
    )
}

export default Header;