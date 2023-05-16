import './style.css'
import { Link } from 'react-router-dom';

export default function SideMenuComponent(){
    return(
            <div className='options-container'>
                <Link to="/main"><div className='back-to-menu'>Uni<span>G</span></div></Link>
                <Link to="/Alunos"><button type='button' className='yellow-btn' id='verAlunos'>Alunos</button></Link>
                <Link to="/Professores"><button type='button' className='yellow-btn' id='verProfessores'>Professores</button></Link>
                <Link to="/Turmas"><button type='button' className='yellow-btn' id='verTurmas'>Turmas</button></Link>
                <Link to="/Disciplinas"><button type='button' className='yellow-btn' id='verDisciplinas'>Disciplinas</button></Link>
            </div>
    );
}
