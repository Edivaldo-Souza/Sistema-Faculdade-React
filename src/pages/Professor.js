import { Link } from "react-router-dom"
import "./ProfessorTela.css"

function Professor(){
    return(
        <div className="mainPage">
        <div id="seta">
            <Link to="/main"><img src="resources/seta-esquerda_2.png"/></Link>
        </div>
        
        <div className="busca-section">
            <div className="searchbar">
                <input type="text" placeholder="Pesquisar..."/>
                <img className="lupa" src="resources/lupa.png" alt="lupa"/>
                <button type="button" id="plus" onclick="novoProfessor()">Novo Professor+</button>
            </div>
            <div class="resultados">
                <div className="result">
                    <p className="nomeAluno">Nome do Professor</p>
                    <p className="matricula">CPF</p>
                    <img className ="lupa" src="resources/lixeira_2.png"/>
                    <img className="lupa" onclick="editar()" src="resources/ferramenta-lapis_2.png"/>
                    <img className="lupa" onclick="consultar()" src="resources/lupa_2.png"/>
                </div>
                <div className="result">
                    <p className="nomeAluno">Nome do Professor</p>
                    <p className="matricula">CPF</p>
                    <img className ="lupa" src="resources/lixeira_2.png"/>
                    <img className="lupa" src="resources/ferramenta-lapis_2.png"/>
                    <img className="lupa" src="resources/lupa_2.png"/>
                </div>
            </div>
        </div>
        <div className="info-section">
            <div className="fotoPerfil" style={{marginBottom: "10px"}}>
                <div style={{display: "flex",  justifyContent: "center"}}>
                    <img src="resources/profile_picture.jpg"/>
                </div>
                <div style={{display: "flex",  justifyContent: "center"}}>
                    <button className="botaoInfo" type="button">Escolher foto</button>
                </div>
            </div>
            <div class="info">
                <input type="text" className="dados" placeholder="Nome"/>
                <input type="text" className="dados" placeholder="CPF"/>
                <input type="text" className="dados" placeholder="Endereco"/>
                <input type="text" className="dados" placeholder="Senha" hidden/>
                <h2>Turmas</h2>
                <div class="turmas">
                    <div className="result">
                        <p className="nomeAluno">Disciplina</p>
                        <p className="matricula">Horario</p>
                        <img className="lupa" src="resources/lupa_2.png"/>
                        
                        
                    </div>
                    <div className="result">
                        <p className="nomeAluno">Disciplina</p>
                        <p className="matricula">Horario</p>
                        
                        <img className="lupa" src="resources/lupa_2.png"/>
                
                    </div>
                </div>
                <button type="button" className="botaoInfo" onclick="salvar()">Salvar</button>
            </div>
        </div>
    </div>
    )
}

export default Professor