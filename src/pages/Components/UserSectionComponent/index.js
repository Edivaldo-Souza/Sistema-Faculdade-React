import { Link } from "react-router-dom";
import './style.css';
import profile_src from '../../../resources/profile_picture.png'

function toggleDp(){
    document.getElementById("dp-items").classList.toggle("show");
}

export default function UserSectionComponent(){
    return(
            <div className="user-section">
                <div className="dropdown">
                    <img onClick={toggleDp} src={profile_src} alt="profile-picture"/>
                    <div id="dp-items" className="dropdown-items">
                        <Link to="/Alunos">Ver Dados</Link>
                        <Link to="/Alunos">Editar Dados</Link>
                        <a href="#">Excluir Conta</a> 
                        <Link to="/Login">Sair</Link>
                    </div>
                </div>
                <h3>Nome do usuário</h3>
            </div> 
    );
}