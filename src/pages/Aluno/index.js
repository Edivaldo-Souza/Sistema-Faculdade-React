import { Link } from "react-router-dom"
import "./style.css"
import SearchComponent from "../Components/SearchComponent"
import { Component, useEffect, useState } from "react"
import axios from "axios"
import SideMenuComponent from "../Components/SideMenuComponent"
import UserSectionComponent from "../Components/UserSectionComponent"

class Aluno extends Component{
    state = {
        nome:""
    }

    render(){
        return(
            <div className="container">
                <SideMenuComponent/>
                <UserSectionComponent/>
                <SearchComponent nomeDoAluno={this.state.nome} />
            </div> 
        )
    }
}

export default Aluno