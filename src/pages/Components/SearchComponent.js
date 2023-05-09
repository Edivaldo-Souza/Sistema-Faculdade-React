import { Component } from "react";
import "../ProfessorTela.css"
import axios from "axios";

class SearchComponent extends Component{
    state = {
        entities:[]
    }
    componentDidMount(){
        this.getAlunos(this.props.nomeDoAluno);
    }
    getAlunos = (id) =>{
        let Url
        if(id!==undefined){
            Url = `http://localhost:8080/api/aluno/${id}`
        }
        else{
            Url = "http://localhost:8080/api/aluno"
        }

        axios({
            method:"get",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:Url,
        })
        .then(response=>{this.setState({
            entities:response.data
        })})
        .catch(error => console.log(error))
    }

    getDataAluno = (nom,mat,end) =>{
        const aluno = {
            nome:nom,
            matricula:mat,
            endereco:end
        }
        this.props.setDataAluno(aluno)
    }

    render(){
       
        const entities = this.state.entities.map((e,index)=>{
            return(
                <div className="result" key={index}>
                    <p className="nomeAluno">{e.nome}</p>
                    <p className="matricula">{e.matricula}</p>
                    
                    <img className="lupa" onClick={()=>{this.getDataAluno(e.nome,e.matricula,e.endereco)}} src="resources/lupa_2.png"/>
                </div>
            )

        })

        return(
            <div className="resultados">
                {entities}        
            </div>
        )
    }
    
}

export default SearchComponent;