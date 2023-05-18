import { Link, useNavigate } from "react-router-dom"
import req from "../../requests"
import "./style.css"
import { useEffect, useState } from "react"
import axios from "axios"

function Login(){
    const navigate = useNavigate()

    

    const sigin = () =>{
        let inputs = document.getElementsByTagName("input")
        axios({
            method:"post",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:"http://localhost:8080/api/login",
            data:{
                nome:inputs[0].value,
                senha:inputs[1].value,
            }
        })
        .then(response=>{
            console.log(response);
            setSigin(inputs[0].value, response.headers.getAuthorization())
            })
        .catch(error => console.log(error))
    }

    const setSigin = (userName, token) =>{
        axios({
            method:"get",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
                "Authorization":token
            },
            url:`http://localhost:8080/api/usuario/${userName}`,
    
        })
        .then(response=>{
            console.log(response.data)
            navigate("/main",{state:{
                nome:userName,
                token:token,
                permissao:response.data.permissao
            }})})    
        .catch(error => console.log(error))

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

            <button onClick={sigin} class="botãoentrar">Entrar</button>
            
            
            <Link to = "/Cadastro">
                <button class="botãocadastrar">Cadastrar</button>
            </Link>
            
            </div>
        </div>
    )
}

export default Login