import { Link } from "react-router-dom"
import req from "../../requests"
import "./style.css"
import { useEffect, useState } from "react"

function Cadastro(){
    const [log,setLogin] = useState()

    const rbody = {
        nome:"Joao",
        senha:"1234"
    }

    const login = () =>{
        fetch(req.login,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify(rbody)
        })
        .then(response => setLogin(response.json)
        .catch(error => console.log(error)))
    }

    return(
        <div className="background">
            <div className="signup-form">
                <div className='logo'>Uni<span>G</span></div>
                <div class="text-campo">
                    <label for="matricula-input" className="login-label">Matricula</label>
                    <input className="input" id="matricula-input" type="text"/>
                </div>
                <div class="text-campo">
                    <label for="name-input" className="login-label">Nome Completo</label>
                    <input className="input" id="name-input" type="text"/>
                </div>
                <div class="text-campo">
                    <label for="pass-input" className="login-label">Senha</label>
                    <input className="input" id="pass-input" type="password"/>
                </div>
                <div class="text-campo">
                    <label for="confirm-pass-input" className="login-label">Confirmar Senha</label>
                    <input className="input" id="confirm-pass-input" type="password"/>
                </div>
                <div class="botões">
                    <Link to="/main"><button onClick={login} class="signup-btn">Cadastrar</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Cadastro