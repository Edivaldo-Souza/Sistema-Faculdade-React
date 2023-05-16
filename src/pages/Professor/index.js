import { Link } from "react-router-dom"
import SearchComponentProfessor from "../Components/SearchComponentProfessor"
import { Component } from "react"

class Professor extends Component{
    state = {
        nome:""
    }

    render(){
        return(
        <div className="mainPage">
        <div className="options-container">
            <h1 style={{color: "white"}}>Consulta de Professores</h1>
            <Link to="/Alunos" ><button type="buttom" id="verAlunos">Alunos</button></Link>
            <Link to="/Professores" ><button type="buttom" id="verProfs">Professores</button></Link>
            <Link to="/Turmas" ><button type="buttom" id="verTurmas">Turmas</button></Link>
            <Link to="/Disciplinas" ><button type="buttom" id="verDisciplinas">Disciplinas</button></Link>
        </div>
        <div id="seta">
            <Link to="/main"><img src="resources/seta-esquerda_2.png"/></Link>
        </div>
        
        <SearchComponentProfessor nomeDoProf={this.state.nome} />
    </div> 
    )
    }
    
}

export default Professor