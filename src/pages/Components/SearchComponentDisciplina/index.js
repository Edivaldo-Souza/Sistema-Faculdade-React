import { Component } from "react";
import "./style.css"
import axios from "axios";

var uuid

class SearchComponentDisciplina extends Component{
    state = {
        entities:[],
        nome:""
    }

    componentDidMount(){
        this.getDisciplinas();
    }

    setResearchName = () =>{
        let input = document.getElementById("searchInput")
        this.getDisciplinas(input.value)
    }

    getDisciplinas = (id) =>{
        let Url
        if(id!==undefined){
            Url = `http://localhost:8080/api/disciplina/codigo/${id}`
        }
        else{
            Url = "http://localhost:8080/api/disciplina"
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

    postDisciplina = () => {
        let inputs = document.getElementsByClassName("post-dataInput")

        axios({
            method:"post",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:"http://localhost:8080/api/disciplina",
            data:{
                nome:inputs[0].value,
                codigo:inputs[1].value,
            }
        })
        .then(()=>{
            this.togglePopUpCreate()
            alert("Disciplina Cadastrada")
            this.getDisciplinas()
        })
        .catch(error => console.log(error))
    }

    setPutDisciplinas = (disc) =>{
        let inputs = document.getElementsByClassName("put-dataInput")
        this.togglePopUpUpdate()

        console.log("put-popup")
        inputs[0].value = disc.nome;
        inputs[1].value = disc.codigo;
        uuid = disc.uuid
    }

    putDisciplinas = () => {
        let inputs = document.getElementsByClassName("put-dataInput")

        axios({
            method:"put",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:"http://localhost:8080/api/disciplina",
            data:{
                nome:inputs[0].value,
                codigo:inputs[1].value,
                uuid:uuid
            }
        })
        .then(()=>{
            this.togglePopUpUpdate()
            alert("Disciplina Alterada")
            this.getDisciplinas()
        })
        .catch(error => console.log(error))
    }

    setViewDisciplina = (disc) =>{
        let inputs = document.getElementsByClassName("view-dataInput")
        this.togglePopUpView()

        inputs[0].value = disc.nome
        inputs[1].value = disc.codigo
    }

    setDeleteDisciplina= (disc) =>{
        let text = document.getElementsByClassName("msg-confirmacao")
        this.togglePopUpDelete()
        text[0].innerHTML = `Deseja excluir a matéria: ${disc.nome}`
        uuid = disc.uuid
    }

    deleteDisciplinas = () =>{
        axios({
            method:"delete",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:`http://localhost:8080/api/disciplina/${uuid}`,
            
        })
        .then(()=>{
            this.togglePopUpDelete()
            alert("Disciplina Deletada")
            this.getDisciplinas()
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
                    <p className="matricula">{e.codigo}</p>
                    
                    <img className="lupa" onClick={()=>{this.setViewDisciplina(e)}} src="resources/lupa_2.png"/>
                    <img onClick={()=>{this.setPutDisciplinas(e)}} src="resources/ferramenta-lapis_2.png"/>
                    <img onClick={()=>{this.setDeleteDisciplina(e)}} src="resources/lixeira_2.png"/>
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
                    <h2>Nova Disciplina</h2>
                    <div className="pop-up-inputs">
                        <input className="post-dataInput" type="text" placeholder="Nome"/>
                        <input className="post-dataInput" type="text" placeholder="Código"/>
                        <button onClick={this.postDisciplina}>Salvar</button>
                    </div>
                </div>
            </div>
            <div id="pop-up-update" className="popup">
                <span className="close-button" onClick={this.togglePopUpUpdate}>&times;</span>
                <div className="popup-content">
                    <h2>Editar Disciplina</h2>
                    <div className="pop-up-inputs">
                        <input className="put-dataInput" type="text" placeholder="Nome"/>
                        <input className="put-dataInput" type="text" placeholder="Código"/>
                        <button onClick={this.putDisciplinas}>Salvar</button>
                    </div>
                </div>
            </div>
            <div id="pop-up-view" className="popup">
                <span className="close-button" onClick={this.togglePopUpView}>&times;</span>
                <div className="popup-content">
                    <h2>Consultar Disciplina</h2>
                    <div className="pop-up-inputs">
                        <h3>Nome:</h3>
                        <input className="view-dataInput" type="text" placeholder="Nome" readOnly/>
                        <h3>Código:</h3>
                        <input className="view-dataInput" type="text" placeholder="Código" readOnly/>
                    </div>
                </div>
            </div>
            <div id="pop-up-delete" className="popup">
                <span className="close-button" onClick={this.togglePopUpDelete}>&times;</span>
                <div className="popup-content">
                    <h2>Excluir Disciplina</h2>
                    <div className="pop-up-inputs">
                        <p className="msg-confirmacao"></p>
                        <button onClick={this.deleteDisciplinas}>Confirmar</button>
                    </div>
                </div>
            </div>

            </div>
        )
    }
    
}

export default SearchComponentDisciplina;