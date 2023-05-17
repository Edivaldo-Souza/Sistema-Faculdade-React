import { Component } from "react";
import "./style.css"
import axios from "axios";
import api from "../../ApiAccess";
import search2_src from "../../../resources/lupa_2.png"
import search_src from "../../../resources/lupa.png"
import edit_src from "../../../resources/ferramenta-lapis_2.png"
import delete_src from "../../../resources/lixeira_2.png"


var uuid

class SearchComponent extends Component{
    state = {
        entities:[],
        nome:""
    }

    componentDidMount(){
        this.setState({nome:this.props.nomeDoAluno})
        this.getAlunos(this.state.nome);
    }

    setResearchName = () =>{
        let input = document.getElementById("searchInput")
        this.getAlunos(input.value)
    }

    getAlunos = (id) =>{
        let Url
        if(id!==undefined){
            Url = `${api}/api/aluno/${id}`
        }
        else{
            Url = `${api}/api/aluno`
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

    postAlunos = () => {
        let inputs = document.getElementsByClassName("post-dataInput")

        axios({
            method:"post",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:`${api}/api/aluno`,
            data:{
                nome:inputs[0].value,
                endereco:inputs[1].value,
                matricula:inputs[2].value,
                senha:inputs[3].value
            }
        })
        .then(()=>{
            this.togglePopUpCreate()
            alert("Aluno Cadastrado")
            this.getAlunos()
        })
        .catch(error => console.log(error))
    }

    setPutAlunos = (aluno) =>{
        let inputs = document.getElementsByClassName("put-dataInput")
        this.togglePopUpUpdate()

        console.log("put-popup")
        inputs[0].value = aluno.nome;
        inputs[1].value = aluno.endereco;
        uuid = aluno.uuid
    }

    putAlunos = () => {
        let inputs = document.getElementsByClassName("put-dataInput")

        axios({
            method:"put",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:`${api}/api/aluno`,
            data:{
                nome:inputs[0].value,
                endereco:inputs[1].value,
                senha:inputs[2].value,
                uuid:uuid
            }
        })
        .then(()=>{
            this.togglePopUpUpdate()
            alert("Aluno Alterado")
            this.getAlunos()
        })
        .catch(error => console.log(error))
    }

    setViewAlunos = (aluno) =>{
        let inputs = document.getElementsByClassName("view-dataInput")
        this.togglePopUpView()

        inputs[0].value = aluno.nome
        inputs[1].value = aluno.endereco
        inputs[2].value = aluno.matricula
    }

    setDeleteAlunos = (aluno) =>{
        let text = document.getElementsByClassName("msg-confirmacao")
        this.togglePopUpDelete()
        text[0].innerHTML = `Deseja excluir o usuário: ${aluno.nome}`
        uuid = aluno.uuid
    }

    deleteAlunos = () =>{
        axios({
            method:"delete",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:`${api}/api/aluno${uuid}`,
            
        })
        .then(()=>{
            this.togglePopUpDelete()
            alert("Aluno Deletado")
            this.getAlunos()
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
                    <p className="matricula">{e.matricula}</p>
                    
                    <img className="lupa" onClick={()=>{this.setViewAlunos(e)}} src={search2_src}/>
                    <img onClick={()=>{this.setPutAlunos(e)}} src={edit_src}/>
                    <img onClick={()=>{this.setDeleteAlunos(e)}} src={delete_src}/>
                </div>
            )

        })

        return(
            <div>
                <div className="busca-section">
                    <div className="searchbar">
                        <input id="searchInput" type="text" placeholder="Pesquisar..."/>
                        <img className="lupa" src={search_src} onClick={this.setResearchName} alt="lupa"/>
                        <div style={{display:"flex",width:"100vh",justifyContent:"right"}}>
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
                        <h2>Novo Aluno</h2>
                        <div className="pop-up-inputs">
                            <input className="post-dataInput" type="text" placeholder="Nome"/>
                            <input className="post-dataInput" type="text" placeholder="Endereço"/>
                            <input className="post-dataInput" text="text" placeholder="Matrícula"/>
                            <input className="post-dataInput" type="text" placeholder="Senha"/>
                            <button onClick={this.postAlunos}>Salvar</button>
                        </div>
                    </div>
                </div>
            <div id="pop-up-update" className="popup">
                <span className="close-button" onClick={this.togglePopUpUpdate}>&times;</span>
                <div className="popup-content">
                    <h2>Editar Aluno</h2>
                    <div className="pop-up-inputs">
                        <input className="put-dataInput" type="text" placeholder="Nome"/>
                        <input className="put-dataInput" type="text" placeholder="Endereço"/>
                        <input className="put-dataInput" type="text" placeholder="Senha"/>
                        <button onClick={this.putAlunos}>Salvar</button>
                    </div>
                </div>
            </div>
            <div id="pop-up-view" className="popup">
                <span className="close-button" onClick={this.togglePopUpView}>&times;</span>
                <div className="popup-content">
                    <h2>Consultar Aluno</h2>
                    <div className="pop-up-inputs">
                        <h3>Nome:</h3>
                        <input className="view-dataInput" type="text" placeholder="Nome" readOnly/>
                        <h3>Endereço:</h3>
                        <input className="view-dataInput" type="text" placeholder="Endereço" readOnly/>
                        <h3>Matrícula:</h3>
                        <input className="view-dataInput" type="text" placeholder="Matrícula" readOnly/>
                    </div>
                </div>
            </div>
            <div id="pop-up-delete" className="popup">
                <span className="close-button" onClick={this.togglePopUpDelete}>&times;</span>
                <div className="popup-content">
                    <h2>Excluir Aluno</h2>
                    <div className="pop-up-inputs">
                        <p className="msg-confirmacao"></p>
                        <button onClick={this.deleteAlunos}>Confirmar</button>
                    </div>
                </div>
            </div>

            </div>
        )
    }
    
}

export default SearchComponent;