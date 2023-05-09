import { Link } from "react-router-dom"
import "./ProfessorTela.css"

function Turma(){
    return(
        <div class="mainPage">
        <div id="seta">
            <Link to="/main"><img src="resources/seta-esquerda_2.png"/></Link>
        </div>
        
        <div class="busca-section">
            <div class="searchbar">
                <input type="text" placeholder="Pesquisar..."/>
                <img class="lupa" src="resources/lupa.png" alt="lupa"/>
                <button type="button" id="plus" onclick="novo()">Nova Turma+</button>
            </div>
            <div class="resultados">
                <div class="result">
                    <p class="nomeAluno">Nome da Disciplina</p>
                    <p class="matricula">Horario</p>
                    <img class ="lupa" src="resources/lixeira_2.png"/>
                    <img class="lupa" onclick="editar()" src="resources/ferramenta-lapis_2.png"/>
                    <img class="lupa" onclick="consultar()" src="resources/lupa_2.png"/>
                </div>
                <div class="result">
                    <p class="nomeAluno">Nome da Disciplina</p>
                    <p class="matricula">Horario</p>
                    <img class ="lupa" src="resources/lixeira_2.png"/>
                    <img class="lupa" src="resources/ferramenta-lapis_2.png"/>
                    <img class="lupa" src="resources/lupa_2.png"/>
                </div>
            </div>
        </div>
        <div class="info-section">
            <div class="info" style={{marginTop: '30px'}}>
                <h2>Dados da Turma</h2>
                <select name="disciplinas" id="disciplinas" class="dropdown">
                    <option value="Opção 1"> Disciplina..</option>
                    <option value="Opção 2"> Opção 2</option>
                    <option value="Opção 3"> Opção 3</option>
                    <option value="Opção 4"> Opção 4</option>
                </select>
                <select name="professores" id="professores" class="dropdown">
                    <option value="Opção 1"> Professor..</option>
                    <option value="Opção 2"> Opção 2</option>
                    <option value="Opção 3"> Opção 3</option>
                    <option value="Opção 4"> Opção 4</option>
                </select>
                <input type="text" class="dados" placeholder="Local"/>
                <input type="text" class="dados" placeholder="Horário"/>
                <a href="ConsolidarNotas.html"><button type="button" class="botaoInfo">Notas</button></a>
                <h2>Alunos</h2>
                <div class="turmas">
                    <div class="result">
                        <p class="nomeAluno">Nome do Aluno</p>
                        <p class="matricula">Matricula</p>
                        <img class="lupa" src="resources/lupa_2.png"/>
                    </div>
                    <div class="result">
                        <p class="nomeAluno">Nome do Aluno</p>
                        <p class="matricula">Matricula</p>
                        <img class="lupa" src="resources/lupa_2.png"/>
                    </div>
                </div>
                <button type="button" class="botaoInfo" onclick="salvar()">Salvar</button>
            </div>
        </div>
    </div>
    )
}

export default Turma