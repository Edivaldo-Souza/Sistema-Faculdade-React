import { Link, useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";

function toggleDp(){
    document.getElementById("dp-items").classList.toggle("show");
}

function TelaPrincipal(){
    const navigate = useNavigate()
    const location = useLocation()
    const [user,setUser] = useState(location.state)
    const [aluno,setAluno] = useState({
        nome:"",
        endereco:"",
        matricula:"",
    })
    const [prof,setProf] = useState({
        nome:"",
        endereco:"",
        cpf:"", 
    })
    const [turmas,setTurmas] = useState([])
    const [turmasProf,setTurmasProf] = useState([])
    const [resultados,setResultados] = useState([])
    const [resultadosProf,setResultadosProf] = useState([])

    const validar = () =>{
        let opt_diretor = document.getElementById("options-diretor")
        let opt_aluno = document.getElementById("options-aluno")
        let opt_professor = document.getElementById("options-prof")
        if(user.permissao == 0){
           opt_aluno.style.display = "block"
           opt_diretor.style.display = "none"
           opt_professor.style.display = "none"
        }
        else if(user.permissao == 1){
            opt_aluno.style.display = "none"
            opt_diretor.style.display = "none"
            opt_professor.style.display = "block"
        }
        else{
           opt_aluno.style.display = "none"
           opt_diretor.style.display = "block"
           opt_professor.style.display = "none"
        }

    }

    const setAuth = () =>{
        axios.defaults.headers.common["Authorization"] = user.token
        
        axios({
            method:"get",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:`http://localhost:8080/api/usuario/${user.nome}`,

        })
        .then(response=>{
            setUser({
                nome:user.nome,
                permissao:response.json.permissao
            })
            alert(user.permissao)
            
        })
        .catch(error => console.log(error))
    }

    const getAluno = () =>{
        axios({
            method:"get",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:`http://localhost:8080/api/aluno/${user.nome}`,
        })
        .then(response=>{setAluno(response.data[0])})
        .catch(error => {getProfessor()})
    }

    const getProfessor = () =>{
        axios({
            method:"get",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:`http://localhost:8080/api/professor/nome/${user.nome}`,
        })
        .then(response=>{setProf(response.data[0])})
        .catch(error => console.log(error))
    }

    const getTurmas = () =>{
        axios({
            method:"get",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:"http://localhost:8080/api/turma",
        })
        .then(response=>{setTurmas(response.data)})
        .catch(error => console.log(error))
    }

    const getTurmasPorProfessor = () =>{
        axios({
            method:"get",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:`http://localhost:8080/api/turma/cpf/${prof.cpf}`,
        })
        .then(response=>{setTurmasProf(response.data)})
        .catch(error => console.log(error))
    }

    const getResultados = () =>{
        axios({
            method:"get",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:`http://localhost:8080/api/resultado/matricula/${aluno.matricula}`,
        })
        .then(response=>{setResultados(response.data)})
        .catch(error => console.log(error))
    }

    const getResultadosProfessor = (turma) =>{
        axios({
            method:"get",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:`http://localhost:8080/api/resultado/turma/${turma.uuid}`,
        })
        .then(response=>{
            console.log(response.data)
            setResultadosProf(response.data)})
        .catch(error => console.log(error))
    }

    const postResultado = (turma) =>{
        axios({
            method:"post",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:"http://localhost:8080/api/resultado",
            data:{
                discCod:turma.discCod,
                turma:turma.uuid,
                matricula:aluno.matricula
            }
        })
        .then(response=>{alert("Matricula Realizada")})
        .catch(error => console.log(error))
    }

    const putResultado = () =>{
        for(let i=0; i<resultadosProf.length; i++){
            axios({
                method:"put",
                headers:{
                    "Content-Type":"application/json; charset=UTF-8",
                },
                url:"http://localhost:8080/api/resultado",
                data:{
                    matricula:resultadosProf[i].matricula,
                    uuid:resultadosProf[i].uuid,
                    nota1:resultadosProf[i].nota1,
                    nota2:resultadosProf[i].nota2,
                    nota3:resultadosProf[i].nota3,
                    media:resultadosProf[i].media,
                    frequencia:resultadosProf[i].frequencia,
                    status:resultadosProf[i].status
                }
            })
            .then(response=>{alert("Dados Salvos")})
            .catch(error => console.log(error))
        }
    }

    const togglePopUpMatriculas = ()=>{
        let popup = document.getElementById("pop-up-matricula")
        if(popup.style.display=="none"){
            popup.style.display="block"
        }
        else{
            popup.style.display="none"
        }
    }

    const setViewAlunos = (aluno) =>{
        let inputs = document.getElementsByClassName("view-dataInput")
        togglePopUpView()

        inputs[0].value = aluno.nome
        inputs[1].value = aluno.endereco
        inputs[2].value = aluno.matricula
    }

    const togglePopUpView = () =>{
        let inputs = document.getElementsByClassName("view-dataInput")
        for(let i of inputs){
            i.value = ""
        }

        let popup = document.getElementById("pop-up-view")
        if(popup.style.display=="none"){
            popup.style.display="block"
        }
        else{
            popup.style.display="none"
        }
    }

    const togglePopUpHistorico = () =>{
        getResultados()
        let popup = document.getElementById("pop-up-historico")
        if(popup.style.display=="none"){
            popup.style.display="block"
        }
        else{
            popup.style.display="none"
        }
    }

    const togglePopUpMinhasTurmas = () =>{
        getTurmasPorProfessor()
        let popup = document.getElementById("pop-up-minhasTurmas")
        if(popup.style.display=="none"){
            popup.style.display="block"
        }
        else{
            popup.style.display="none"
        }
    }

    const togglePopUpNotas = (turma) =>{
        getResultadosProfessor(turma)
        let popup = document.getElementById("pop-up-notas")
        let inputs = document.getElementsByClassName("input-notas")

        if(popup.style.display=="none"){
            popup.style.display="block"
        }
        else{
            popup.style.display="none"
        }

    }
    

    useEffect(()=>{
        setAuth();
        validar();
        getTurmas();
        if(user.permissao == 0){
           getAluno() 
        }
        else if(user.permissao == 1){
            getProfessor()
        }
    },[])
    return(

        <div className="container">
        <div className="options-container">
            <h1 style={{color: "white"}}>Consultas</h1>
            <div id="options-diretor">
                <Link to="/Alunos" state={user}><button type="buttom" id="verAlunos">Alunos</button></Link>
                <Link to="/Professores" state={user}><button type="buttom" id="verProfs">Professores</button></Link>
                <Link to="/Turmas" state={user}><button type="but tom" id="verTurmas">Turmas</button></Link>
                <Link to="/Disciplinas" state={user}><button type="buttom" id="verDisciplinas">Disciplinas</button></Link>
            </div>
            <div id="options-aluno">
                <button onClick={togglePopUpMatriculas}>Matricular-se em Turma</button>
            </div>
            <div id="options-prof">
                <button onClick={togglePopUpMinhasTurmas}>Minhas Turmas</button>
            </div>
            
        </div>
        <div className="user-section">
            <div className="dropdown">
                <img onClick={toggleDp} src="resources/profile_picture.jpg" alt="profile-picture"/>
                <div id="dp-items" className="dropdown-items">
                    <button onClick={()=>{
                        if(user.permissao == 0){
                            setViewAlunos(aluno)
                        }
                    }}>Ver Dados</button>
                    <Link to="/Alunos">Editar Dados</Link>
                    <a href="#">Excluir Conta</a> 
                    <Link to="/">Sair</Link>
                </div>
            </div>
            <h3>{user.nome}</h3>
        </div>
            <div style={{width:"80%"}} id="pop-up-matricula" className="popup">
                <span className="close-button" onClick={togglePopUpMatriculas}>&times;</span>
                <div className="popup-content">
                    <h2>Turmas Disponíveis</h2>
                    <div id="pop-up-inputs" className="pop-up-inputs">
                        <div style={{marginRight:"10px",padding:"5px"}}>
                            <div className="resultados">
                                {turmas.map((e,index)=>{
                                    
                                    return(
                                        <div className="result" key={index}>
                                            <p className="nomeAluno">{e.discCod}</p>
                                            <p className="matricula">{e.horario}</p>
                                            
                                            <button onClick={()=>{postResultado(e)}} style={{width:"15%",color:"black"}}>Matricular-se</button>
                                        </div>
                                    )

                                    })}
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div id="pop-up-view" className="popup">
                <span className="close-button" onClick={togglePopUpView}>&times;</span>
                <div className="popup-content">
                    <h2>Consultar Aluno</h2>
                    <div className="pop-up-inputs">
                        <h3>Nome:</h3>
                        <input className="view-dataInput" type="text" placeholder="Nome" readOnly/>
                        <h3>Endereço:</h3>
                        <input className="view-dataInput" type="text" placeholder="Endereço" readOnly/>
                        <h3>Matrícula:</h3>
                        <input className="view-dataInput" type="text" placeholder="Matrícula" readOnly/>
                        <button style={{marginTop:"10px"}} onClick={togglePopUpHistorico}>Histórico</button>
                    </div>
                </div>
            </div>
            <div style={{width:"80%"}} id="pop-up-historico" className="popup">
                <span className="close-button" onClick={togglePopUpHistorico}>&times;</span>
                <div className="popup-content">
                    <h2>Histórico</h2>
                    <div className="pop-up-inputs">
                       <table>
                        <thead>
                            <th>Disciplina</th>
                            <th>Nota 1</th>
                            <th>Nota 2</th>
                            <th>Nota 3</th>
                            <th>Média</th>
                            <th>Frequência</th>
                            <th>Status</th>
                        </thead>
                        <tbody>
                            {resultados.map((e,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{e.discCod}</td>
                                        <td>{e.nota1}</td>
                                        <td>{e.nota2}</td>
                                        <td>{e.nota3}</td>
                                        <td>{e.media}</td>
                                        <td>{e.frequencia}</td>
                                        <td>{e.status}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                       </table>
                        
                    </div>
                </div>
            </div>
            <div style={{width:"80%"}} id="pop-up-minhasTurmas" className="popup">
                <span className="close-button" onClick={togglePopUpMinhasTurmas}>&times;</span>
                <div className="popup-content">
                    <h2>Minhas Turmas</h2>
                    <div id="pop-up-inputs" className="pop-up-inputs">
                        <div style={{marginRight:"10px",padding:"5px"}}>
                            <div className="resultados">
                                {turmasProf.map((e,index)=>{
                                    
                                    return(
                                        <div className="result" key={index}>
                                            <p className="nomeAluno">{e.discCod}</p>
                                            <p className="matricula">{e.horario}</p>
                                            
                                            <button style={{width:"15%",color:"black"}} onClick={()=>{togglePopUpNotas(e)}}>Ver Alunos</button>
                                        </div>
                                    )

                                    })}
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width:"80%"}} id="pop-up-notas" className="popup">
                <span className="close-button" onClick={togglePopUpNotas}>&times;</span>
                <div className="popup-content">
                    <h2>Alunos da Turma</h2>
                    <div className="pop-up-inputs">
                       <table>
                        <thead>
                            <th>Matricula</th>
                            <th>Nota 1</th>
                            <th>Nota 2</th>
                            <th>Nota 3</th>
                            <td>Média</td>
                            <th>Frequência</th>
                            <th>Status</th>
                        </thead>
                        <tbody>
                            {resultadosProf.map((e,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{e.matricula}</td>
                                        <td><input type="text" className="input-notas"></input></td>
                                        <td><input type="text" className="input-notas"></input></td>
                                        <td><input type="text" className="input-notas"></input></td>
                                        <td>{e.media}</td>
                                        <td><input type="text" className="input-notas"></input></td>
                                        <td>{e.status}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                       </table>
                        <button onClick={putResultado}>Salvar</button>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default TelaPrincipal