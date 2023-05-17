import { Link } from "react-router-dom"
import SearchComponentProfessor from "../Components/SearchComponentProfessor"
import { Component } from "react"
import SideMenuComponent from "../Components/SideMenuComponent"
import UserSectionComponent from "../Components/UserSectionComponent"

class Professor extends Component{
    state = {
        nome:""
    }

    render(){
        return(
        <div className="container">
        <SideMenuComponent/>
        <UserSectionComponent/>
        <SearchComponentProfessor nomeDoProf={this.state.nome} />
    </div> 
    )
    }
    
}

export default Professor