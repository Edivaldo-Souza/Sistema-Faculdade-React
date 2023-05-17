import { Link } from "react-router-dom"
import req from "../../requests"
import "./style.css"
import { useEffect, useState } from "react"

function Login(){
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
            <div className="login-form">
                <div className='logo'>Uni<span>G</span></div>
                <div className="text-campo">
                    <label for="input" className="login-label">Login</label>
                    <input className ="input" id="input" type="text"/>
                </div>
                <div className="text-campo">
                    <label for="pass" className="login-label">Senha</label>
                    <input className ="input" id="pass" type="password"/>
                </div>
                <div className="botões">
                    <Link to="/main"><button onClick={login} className="login-btn">Entrar</button></Link>
                    <Link to = "/Cadastro"><button className="signup-btn">Cadastrar</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Login