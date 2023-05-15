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
        <div>
            <div class="centro">
            <h2 class="h2class">Usuário:</h2>
            <input class ="imput" type="text"/>
            </div>
            <div class="centro">
            <h2 class="h2class">Senha:</h2>
            <input class ="imput" type="password"/>
            </div>
            <div class="botões">

            <Link to="/main">
                <button onClick={login} class="botãoentrar">Entrar</button>
            </Link>
            
            
            <Link>
                <button class="botãocadastrar">Cadastrar</button>
            </Link>
            
            </div>
        </div>
    )
}

export default Login