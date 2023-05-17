import { useEffect, useState } from "react"
import "./style.css"
import { Link } from "react-router-dom"
import SideMenuComponent from "../Components/SideMenuComponent"

function NavegationBarComponent(){
    const [titulo,setTitulo] = useState()


    useEffect(()=>{
        setTitulo(this.props.titulo)
    },[])
    return(
        <>
            <SideMenuComponent/>
        </>
    )
}

export default NavegationBarComponent