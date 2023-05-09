import { Component } from "react";
import "../ProfessorTela.css"

class CrudComponentAluno extends Component{
    inicial = {
        nome:"",
        matricula:"",
        endereco:""
    }

    state = this.inicial

    updateStateInputs = (event) =>{
        const {name,value} = event.target
        this.setState({
            [name]:value
        })
    }

    setInputs = (aluno) =>{
        let nomeInput = document.getElementById("nom")
        let matInput = document.getElementById("mat")
        let endInput = document.getElementById("end")
        
    }

    render(){
        this.setInputs(this.props.currentAluno)
        const {nome,matricula,endereco} = this.state
        return(
            <div className="info-section">
            <div className="fotoPerfil" style={{marginBottom: "10px"}}>
                <div style={{display: "flex",  justifyContent: "center"}}>
                    <img src="resources/profile_picture.jpg"/>
                </div>
                <div style={{display: "flex",  justifyContent: "center"}}>
                    <button className="botaoInfo" type="button">Escolher foto</button>
                </div>
            </div>
            <div className="info">
                <input id="nom" type="text" onChange={this.updateStateInputs} className="dados" name="nome" value={nome} placeholder="Nome"/>
                <input id="mat" type="text" onChange={this.updateStateInputs} className="dados" name="matricula" value={matricula} placeholder="Matrícula"/>
                <input id="end" type="text" onChange={this.updateStateInputs} className="dados" name="endereco" value={endereco} placeholder="Endereço"/>
                <a href="Historico.html"><button type="button" className="botaoInfo" >Ver Histórico</button></a>
                <button type="button" className="botaoInfo" onClick={()=>{this.atualizar(this.state)}}>Salvar</button>
            </div>
        </div>    
        )
    }
}

export default CrudComponentAluno;