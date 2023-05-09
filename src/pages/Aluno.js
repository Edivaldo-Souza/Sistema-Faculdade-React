import { Link } from "react-router-dom"
import "./ProfessorTela.css"
import CrudComponentAluno from "./Components/CrudComponentAluno"
import SearchComponent from "./Components/SearchComponent"
import { useEffect, useState } from "react"
import axios from "axios"

function Aluno(){
    const [nome,setNome] = useState("")
    const [novoAluno,setNovoAluno] = useState({
        nome:"",
        matricula:"",
        endereco:"",
    })
    const [currentAluno,setCurrentAluno] = useState({
        nome:"",
        matricula:"",
        endereco:"",
    })

    const atualizarAluno = (aluno) => {
        setNovoAluno(aluno)
        axios({
            method:"put",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:"http://localhost:8080/api/aluno",
            data:novoAluno
        })
        .then(response=>console.log(response.json))
        .catch(error => console.log(error))
    }

    const setResearchName = () =>{
        let input = document.getElementById("searchInput")
        setNome(input.value)
    }

    const setDataAluno = (aluno) =>{
        setCurrentAluno(aluno)
        
    }

    return(
        <div className="mainPage">
        <div id="seta">
            <Link to="/main"><img src="resources/seta-esquerda_2.png"/></Link>
        </div>
        
        <div className="busca-section">
            <div className="searchbar">
                <input id="searchInput" type="text" placeholder="Pesquisar..."/>
                <img className="lupa" src="resources/lupa.png" onClick={setResearchName} alt="lupa"/>
            </div>
            <SearchComponent nomeDoAluno={nome} setDataAluno={setDataAluno}/>
        </div>
        <CrudComponentAluno atualizar={atualizarAluno} currentAluno={currentAluno} apenasLer={true} />
    </div> 
    )
}

export default Aluno