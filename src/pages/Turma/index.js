import { Link } from "react-router-dom"
import "./style.css"
import { Component, useEffect, useState } from "react"
import SearchComponentTurma from "../Components/SearchComponentTurma"
import SideMenuComponent from "../Components/SideMenuComponent"
import UserSectionComponent from "../Components/UserSectionComponent"

class Turma extends Component{
    state = {
        nome:""
    }

    render(){
        return(
            <div className="container">
                <SideMenuComponent/>
                <UserSectionComponent/>
                <SearchComponentTurma nomeDoAluno={this.state.nome} />
            </div> 
        )
    }
}

export default Turma