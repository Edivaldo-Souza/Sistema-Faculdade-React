import { Link } from "react-router-dom"
import "./ProfessorTela.css"

function Disciplina(){
    return(
        <div class="mainPage">
        <div id="seta">
            <Link to="/main"><img src="resources/seta-esquerda_2.png"/></Link>
        </div>
        
        <div class="busca-section">
            <div class="searchbar">
                <input type="text" placeholder="Pesquisar..."/>
                <img class="lupa" src="resources/lupa.png" alt="lupa"/>
                <button type="button" id="plus" onclick="novo()">Nova Disciplina+</button>
            </div>
            <div class="resultados">
                <div class="result">
                    <p class="nomeAluno">Nome da Disciplina</p>
                    <p class="matricula">Codigo</p>
                    <img class ="lupa" src="resources/lixeira_2.png"/>
                    <img class="lupa" src="resources/ferramenta-lapis_2.png"/>
                    <img class="lupa" onclick="consultar()" src="resources/lupa_2.png"/>
                </div>
                <div class="result">
                    <p class="nomeAluno">Nome da Disciplina</p>
                    <p class="matricula">Codigo</p>
                    <img class ="lupa" src="resources/lixeira_2.png"/>
                    <img class="lupa" src="resources/ferramenta-lapis_2.png"/>
                    <img class="lupa" src="resources/lupa_2.png"/>
                </div>
            </div>
        </div>
        <div class="info-section">
            <div class="info" style={{marginTop: '30px'}}>
                <h2>Dados da Disciplina</h2>
                <input type="text" class="dados" placeholder="Nome"/>
                <input type="text" class="dados" placeholder="Código"/>
               
                <button type="button" class="botaoInfo" onclick="salvar()">Salvar</button>
            </div>
        </div>
    </div>
    )
}

export default Disciplina