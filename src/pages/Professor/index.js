import { Link, useLocation } from "react-router-dom"
import SearchComponentProfessor from "../Components/SearchComponentProfessor"
import { Component,useState } from "react"

function Professor(){
    const location = useLocation()
    const [user,setUser] = useState(location.state)

    const validar = () =>{
        let buttons = document.getElementsByTagName("button")
        if(user.permissao == 0 || user.permissao == 1){
           buttons[0].style.display ="none"
           buttons[1].style.display ="none"
           buttons[3].style.display ="none"
        }
        else{
           buttons[0].style.display ="block"
           buttons[1].style.display ="block"
           buttons[3].style.display ="block"
        }

    }

        return(
        <div className="mainPage">
        <div className="options-container">
            <h1 style={{color: "white"}}>Consulta de Professores</h1>
            <Link to="/Alunos" state={user}><button type="buttom" id="verAlunos">Alunos</button></Link>
            <Link to="/Professores" state={user}><button type="buttom" id="verProfs">Professores</button></Link>
            <Link to="/Turmas" state={user}><button type="buttom" id="verTurmas">Turmas</button></Link>
            <Link to="/Disciplinas" state={user}><button type="buttom" id="verDisciplinas">Disciplinas</button></Link>
        </div>
        <div id="seta">
            <Link to="/main" state={location.state}><img src="resources/seta-esquerda_2.png"/></Link>
        </div>
        
        <SearchComponentProfessor />
    </div> 
    )
    
}

export default Professor