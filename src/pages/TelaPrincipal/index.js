import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";

function toggleDp(){
    document.getElementById("dp-items").classList.toggle("show");
}

function TelaPrincipal(){
    
    return(
        <div className="container">
        <div className="options-container">
            <h1 style={{color: "white"}}>Consultas</h1>
            <Link to="/Alunos" ><button type="buttom" id="verAlunos">Alunos</button></Link>
            <Link to="/Professores" ><button type="buttom" id="verProfs">Professores</button></Link>
            <Link to="/Turmas" ><button type="but tom" id="verTurmas">Turmas</button></Link>
            <Link to="/Disciplinas" ><button type="buttom" id="verDisciplinas">Disciplinas</button></Link>
        </div>
        <div className="user-section">
            <div className="dropdown">
                <img onClick={toggleDp} src="resources/profile_picture.jpg" alt="profile-picture"/>
                <div id="dp-items" className="dropdown-items">
                    <Link to="/Alunos">Ver Dados</Link>
                    <Link to="/Alunos">Editar Dados</Link>
                    <a href="#">Excluir Conta</a> 
                    <Link to="/Login">Sair</Link>
                </div>
            </div>
            <h3>Nome do usuário</h3>
        </div>
    </div>
    )
}

export default TelaPrincipal