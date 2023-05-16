import { useEffect, useState } from "react"
import "./style.css"
import { Link } from "react-router-dom"

function NavegationBarComponent(){
    const [titulo,setTitulo] = useState()


    useEffect(()=>{
        setTitulo(this.props.titulo)
    },[])
    return(
        <div className="options-container">
            <h1 style={{color: "white"}}>{titulo}</h1>
            <Link to="/Alunos" ><button type="buttom" id="verAlunos">Alunos</button></Link>
            <Link to="/Professores" ><button type="buttom" id="verProfs">Professores</button></Link>
            <Link to="/Turmas" ><button type="buttom" id="verTurmas">Turmas</button></Link>
            <Link to="/Disciplinas" ><button type="buttom" id="verDisciplinas">Disciplinas</button></Link>
        </div>
    )
}

export default NavegationBarComponent