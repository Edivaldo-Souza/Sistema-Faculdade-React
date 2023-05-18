import { Component } from "react";
import "./style.css"
import axios from "axios";

var uuid
var listaDisciplinas
var listaProfessores
var disciplinaSelected
var professorSelected

class SearchComponentTurma extends Component{
    state = {
        entities:[],
        professores:[],
        disciplinas:[],
        nome:""
    }

    componentDidMount(){
        this.getTurmas();
    }

    setResearchName = () =>{
        let input = document.getElementById("searchInput")
        this.getTurmas(input.value)
    }

    getProfessores = async(id) =>{
        let Url
        if(id!==undefined){
            Url = `http://localhost:8080/api/professor/cpf/${id}`
        }
        else{
            Url = "http://localhost:8080/api/professor"
        }

        await axios({
            method:"get",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:Url,
        })
        .then(response=>{this.setState({
            professores:response.data
        })})
        .catch(error => console.log(error))
    }

    getDisciplinas = async(id) =>{
        let Url
        if(id!==undefined){
            Url = `http://localhost:8080/api/disciplina/codigo/${id}`
        }
        else{
            Url = "http://localhost:8080/api/disciplina"
        }

        await axios({
            method:"get",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:Url,
        })
        .then(response=>{this.setState({
            disciplinas:response.data
        })})
        .catch(error => console.log(error))
    }

    getTurmas = (id) =>{
        let Url
        if(id!==undefined){
            Url = `http://localhost:8080/api/turma/codigo/${id}`
        }
        else{
            Url = "http://localhost:8080/api/turma"
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

    setPostTurmas = () =>{
        this.getProfessores()
        this.getDisciplinas()
        this.togglePopUpCreate()

        listaDisciplinas = this.state.disciplinas.map((e,index)=>{
            return(
                <div className="result" key={index}>
                    <p className="nomeAluno">{e.nome}</p>
                    <p className="matricula">{e.codigo}</p>
                    
                    <input type="radio" className="select-disciplina-input" onClick={()=>{disciplinaSelected=e.codigo}} name="select-disciplina" value={e.codigo}/>
                </div>
            )
        })

        listaProfessores = this.state.professores.map((e,index)=>{
            return(
                <div className="result" key={index}>
                    <p className="nomeAluno">{e.nome}</p>
                    <p className="matricula">{e.cpf}</p>
                    
                    <input type="radio" className="select-professor-input" onClick={()=>{professorSelected=e.cpf}} name="select-professor" value={e.cpf}/>
                </div>
            )
        })
    }

    postTurmas = () => {
        let inputs = document.getElementsByClassName("post-dataInput")

        axios({
            method:"post",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:"http://localhost:8080/api/turma",
            data:{
                discCod:disciplinaSelected,
                profCpf:professorSelected,
                local:inputs[0].value,
                horario:inputs[1].value
            }
        })
        .then(()=>{
            this.togglePopUpCreate()
            alert("Turma Cadastrada")
            this.getTurmas()
        })
        .catch(error => console.log(error))
    }

    setPutTurmas = (turma) =>{
        let inputs = document.getElementsByClassName("put-dataInput")
        this.togglePopUpUpdate()

        console.log("put-popup")
        inputs[0].value = turma.local;
        inputs[1].value = turma.horario;
        uuid = turma.uuid
    }

    putTurmas = () => {
        let inputs = document.getElementsByClassName("put-dataInput")

        axios({
            method:"put",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:"http://localhost:8080/api/turma",
            data:{
                local:inputs[0].value,
                horario:inputs[1].value,
                uuid:uuid
            }
        })
        .then(()=>{
            this.togglePopUpUpdate()
            alert("Turma Alterada")
            this.getTurmas()
        })
        .catch(error => console.log(error))
    }

    setViewTurma = (turma) =>{
        let inputs = document.getElementsByClassName("view-dataInput")

        axios({
            method:"get",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:`http://localhost:8080/api/disciplina/codigo/${turma.discCod}`,
        })
        .then(response=>{inputs[0].value = response.data[0].nome})
        .catch(error => console.log(error))

        axios({
            method:"get",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:`http://localhost:8080/api/professor/cpf/${turma.profCpf}`,
        })
        .then(response=>{inputs[1].value = response.data[0].nome})
        .catch(error => console.log(error))

        this.togglePopUpView()

        inputs[2].value = turma.local
        inputs[3].value = turma.horario
    }

    setDeleteTurma = (turma) =>{
        let text = document.getElementsByClassName("msg-confirmacao")
        this.togglePopUpDelete()
        text[0].innerHTML = `Deseja excluir o usuário: ${turma.discCod}`
        uuid = turma.uuid
    }

    deleteTurmas = () =>{
        axios({
            method:"delete",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:`http://localhost:8080/api/turma/${uuid}`,
            
        })
        .then(()=>{
            this.togglePopUpDelete()
            alert("Turma Deletada")
            this.getTurmas()
        })
        .catch(error => console.log(error))
    }

    togglePopUpCreate = () =>{
        let inputs = document.getElementsByClassName("post-dataInput")
        for(let i of inputs){
            i.value = ""
        }

        let popup = document.getElementById("pop-up-create")
        if(popup.style.display=="none"){
            popup.style.display="block"
        }
        else{
            popup.style.display="none"
        } 
    }

    togglePopUpUpdate = () =>{
        let inputs = document.getElementsByClassName("put-dataInput")
        for(let i of inputs){
            i.value = ""
        }

        let popup = document.getElementById("pop-up-update")
        if(popup.style.display=="none"){
            popup.style.display="block"
        }
        else{
            popup.style.display="none"
        }
        
    }

    togglePopUpView = () =>{
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

    togglePopUpDelete = () =>{
        let popup = document.getElementById("pop-up-delete")
        if(popup.style.display=="none"){
            popup.style.display="block"
        }
        else{
            popup.style.display="none"
        }
    }

    render(){
       
        const entities = this.state.entities.map((e,index)=>{

            return(
                <div className="result" key={index}>
                    <p className="nomeAluno">{e.discCod}</p>
                    <p className="matricula">{e.horario}</p>
                    

                    <img className="lupa" onClick={()=>{this.setViewTurma(e)}} src="resources/lupa_2.png"/>
                    <img  onClick={()=>{this.setPutTurmas(e)}} src="resources/ferramenta-lapis_2.png"/>
                    <img  onClick={()=>{this.setDeleteTurma(e)}} src="resources/lixeira_2.png"/>
                </div>
            )

        })

        return(
            <div>
            <div className="busca-section">
                <div className="searchbar">
                <input id="searchInput" type="text" placeholder="Pesquisar..."/>
                <img className="lupa" src="resources/lupa.png" onClick={this.setResearchName} alt="lupa"/>
                <div style={{display:"flex",width:"60%",justifyContent:"right"}}>
                    <button onClick={this.setPostTurmas}>Adicionar</button>
                </div>
                </div>
                <div className="resultados">
                    {entities}        
                </div>
            </div>
            <div style={{width:"80%"}} id="pop-up-create" className="popup">
                <span className="close-button" onClick={this.togglePopUpCreate}>&times;</span>
                <div className="popup-content">
                    <h2>Nova Turma</h2>
                    <div id="pop-up-inputs" className="pop-up-inputs">
                        <div style={{marginRight:"10px", padding:"5px"}}>
                            <div className="resultados">
                                {listaDisciplinas}
                            </div>
                            
                        </div>
                        <div style={{marginRight:"10px",padding:"5px"}}>
                            <div className="resultados">
                                {listaProfessores}
                            </div>
                            
                        </div>
                        
                        <div style={{display:"block",marginTop:"20px"}}>
                            <input className="post-dataInput" text="text" placeholder="Local"/>
                            <input className="post-dataInput" type="text" placeholder="Horário"/>
                            <button style={{width:"80%"}} onClick={this.postTurmas}>Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="pop-up-update" className="popup">
                <span className="close-button" onClick={this.togglePopUpUpdate}>&times;</span>
                <div className="popup-content">
                    <h2>Editar Turma</h2>
                    <div className="pop-up-inputs">
                        <input className="put-dataInput" type="text" placeholder="Local"/>
                        <input className="put-dataInput" type="text" placeholder="Horario"/>
                        <button onClick={this.putTurmas}>Salvar</button>
                    </div>
                </div>
            </div>
            <div id="pop-up-view" className="popup">
                <span className="close-button" onClick={this.togglePopUpView}>&times;</span>
                <div className="popup-content">
                    <h2>Consultar Professor</h2>
                    <div className="pop-up-inputs">
                        <h3>Disciplina:</h3>
                        <input className="view-dataInput" type="text" placeholder="Disciplina" readOnly/>
                        <h3>Professor:</h3>
                        <input className="view-dataInput" type="text" placeholder="Professor" readOnly/>
                        <h3>Local:</h3>
                        <input className="view-dataInput" type="text" placeholder="Local" readOnly/>
                        <h3>Horario:</h3>
                        <input className="view-dataInput" type="text" placeholder="Local" readOnly/>
                    </div>
                </div>
            </div>
            <div id="pop-up-delete" className="popup">
                <span className="close-button" onClick={this.togglePopUpDelete}>&times;</span>
                <div className="popup-content">
                    <h2>Excluir Turma</h2>
                    <div className="pop-up-inputs">
                        <p className="msg-confirmacao"></p>
                        <button onClick={this.deleteTurmas}>Confirmar</button>
                    </div>
                </div>
            </div>

            </div>
        )
    }
    
}

export default SearchComponentTurma;