import { Component } from "react";
import "./style.css"
import axios from "axios";

var uuid

class SearchComponentProfessor extends Component{
    state = {
        entities:[],
        nome:""
    }

    componentDidMount(){
        this.setState({nome:this.props.nomeDoProf})
        this.getProfessores(this.state.nome);
    }

    setResearchName = () =>{
        let input = document.getElementById("searchInput")
        this.getProfessores(input.value)
    }

    getProfessores = (id) =>{
        let Url
        if(id!==undefined){
            Url = `http://localhost:8080/api/professor/${id}`
        }
        else{
            Url = "http://localhost:8080/api/professor"
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

    postProfessor = () => {
        let inputs = document.getElementsByClassName("post-dataInput")

        axios({
            method:"post",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:"http://localhost:8080/api/professor",
            data:{
                nome:inputs[0].value,
                endereco:inputs[1].value,
                cpf:inputs[2].value,
                senha:inputs[3].value
            }
        })
        .then(()=>{
            this.togglePopUpCreate()
            alert("Professor Cadastrado")
            this.getProfessores()
        })
        .catch(error => console.log(error))
    }

    setPutProfessores = (aluno) =>{
        let inputs = document.getElementsByClassName("put-dataInput")
        this.togglePopUpUpdate()

        console.log("put-popup")
        inputs[0].value = aluno.nome;
        inputs[1].value = aluno.endereco;
        uuid = aluno.uuid
    }

    putProfessores = () => {
        let inputs = document.getElementsByClassName("put-dataInput")

        axios({
            method:"put",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:"http://localhost:8080/api/professor",
            data:{
                nome:inputs[0].value,
                endereco:inputs[1].value,
                senha:inputs[2].value,
                uuid:uuid
            }
        })
        .then(()=>{
            this.togglePopUpUpdate()
            alert("Professor Alterado")
            this.getProfessores()
        })
        .catch(error => console.log(error))
    }

    setViewProfessor = (prof) =>{
        let inputs = document.getElementsByClassName("view-dataInput")
        this.togglePopUpView()

        inputs[0].value = prof.nome
        inputs[1].value = prof.endereco
        inputs[2].value = prof.cpf
    }

    setDeleteProfessor = (prof) =>{
        let text = document.getElementsByClassName("msg-confirmacao")
        this.togglePopUpDelete()
        text[0].innerHTML = `Deseja excluir o usuário: ${prof.nome}`
        uuid = prof.uuid
    }

    deleteProfessores = () =>{
        axios({
            method:"delete",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:`http://localhost:8080/api/professor/${uuid}`,
            
        })
        .then(()=>{
            this.togglePopUpDelete()
            alert("Professor Deletado")
            this.getProfessores()
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
                    <p className="nomeAluno">{e.nome}</p>
                    <p className="matricula">{e.cpf}</p>
                    
                    <img className="lupa" onClick={()=>{this.setViewProfessor(e)}} src="resources/lupa_2.png"/>
                    <img onClick={()=>{this.setPutProfessores(e)}} src="resources/ferramenta-lapis_2.png"/>
                    <img onClick={()=>{this.setDeleteProfessor(e)}} src="resources/lixeira_2.png"/>
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
                    <button onClick={this.togglePopUpCreate}>Adicionar</button>
                </div>
                </div>
                <div className="resultados">
                    {entities}        
                </div>
            </div>
            <div id="pop-up-create" className="popup">
                <span className="close-button" onClick={this.togglePopUpCreate}>&times;</span>
                <div className="popup-content">
                    <h2>Novo Professor</h2>
                    <div className="pop-up-inputs">
                        <input className="post-dataInput" type="text" placeholder="Nome"/>
                        <input className="post-dataInput" type="text" placeholder="Endereço"/>
                        <input className="post-dataInput" text="text" placeholder="CPF"/>
                        <input className="post-dataInput" type="text" placeholder="Senha"/>
                        <button onClick={this.postProfessor}>Salvar</button>
                    </div>
                </div>
            </div>
            <div id="pop-up-update" className="popup">
                <span className="close-button" onClick={this.togglePopUpUpdate}>&times;</span>
                <div className="popup-content">
                    <h2>Editar Professor</h2>
                    <div className="pop-up-inputs">
                        <input className="put-dataInput" type="text" placeholder="Nome"/>
                        <input className="put-dataInput" type="text" placeholder="Endereço"/>
                        <input className="put-dataInput" type="text" placeholder="Senha"/>
                        <button onClick={this.putProfessores}>Salvar</button>
                    </div>
                </div>
            </div>
            <div id="pop-up-view" className="popup">
                <span className="close-button" onClick={this.togglePopUpView}>&times;</span>
                <div className="popup-content">
                    <h2>Consultar Professor</h2>
                    <div className="pop-up-inputs">
                        <h3>Nome:</h3>
                        <input className="view-dataInput" type="text" placeholder="Nome" readOnly/>
                        <h3>Endereço:</h3>
                        <input className="view-dataInput" type="text" placeholder="Endereço" readOnly/>
                        <h3>CPF:</h3>
                        <input className="view-dataInput" type="text" placeholder="CPF" readOnly/>
                    </div>
                </div>
            </div>
            <div id="pop-up-delete" className="popup">
                <span className="close-button" onClick={this.togglePopUpDelete}>&times;</span>
                <div className="popup-content">
                    <h2>Excluir Professor</h2>
                    <div className="pop-up-inputs">
                        <p className="msg-confirmacao"></p>
                        <button onClick={this.deleteProfessores}>Confirmar</button>
                    </div>
                </div>
            </div>

            </div>
        )
    }
    
}

export default SearchComponentProfessor;