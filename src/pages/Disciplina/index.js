import { Link } from "react-router-dom"
import "./style.css"
import SearchComponentDisciplina from "../Components/SearchComponentDisciplina"
import { Component, useEffect, useState } from "react"
import axios from "axios"
import SideMenuComponent from "../Components/SideMenuComponent"
import UserSectionComponent from "../Components/UserSectionComponent"

class Disciplina extends Component{
    state = {
        nome:""
    }

    render(){
        return(
            <div className="container">
                <SideMenuComponent/>
                <UserSectionComponent/>
                <SearchComponentDisciplina nomeDaDisc={this.state.nome} />
            </div> 
        )
    }
}

export default Disciplina