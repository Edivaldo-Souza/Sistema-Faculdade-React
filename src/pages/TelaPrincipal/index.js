import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";
import SideMenuComponent from "../Components/SideMenuComponent";
import UserSectionComponent from "../Components/UserSectionComponent";


function TelaPrincipal(){
    
    return(
        <div className="container">
            <SideMenuComponent />    
            <UserSectionComponent/>
        </div>
    )
}

export default TelaPrincipal
