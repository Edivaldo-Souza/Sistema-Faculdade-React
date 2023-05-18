import { Link, useNavigate } from "react-router-dom"
import req from "../../requests"
import "./style.css"
import { useEffect, useState } from "react"
import axios from "axios"

function Cadastro(){
    const navigate = useNavigate()

    const post = () =>{
        let inputs = document.getElementsByTagName("input")

        axios({
            method:"post",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:"http://localhost:8080/api/aluno",
            data:{
                nome:inputs[0].value,
                endereco:inputs[1].value,
                matricula:inputs[2].value,
                senha:inputs[3].value,
                diretorCod:inputs[5].value
            }
        })
        .then(()=>{
            alert("Usuário Cadastrado")
            navigate("/")
        })
        .catch(error => console.log(error))
    }

    return(
            <div class = "body">
                <div class = "centro" >
                <div class="areaLogin">
                    <h2 class="h2class">Nome:</h2>
                    <div class="centro">
                    <input class ="imput" type="text"/>
                    </div>
                    <h2 class="h2class">Endereço:</h2>
                    <div class="centro">
                    <input class ="imput" type="text"/>
                    </div>
                    <h2 class="h2class">Matrícula:</h2>
                    <div class="centro">
                    <input class ="imput" type="text"/>
                    </div>
                    <h2 class="h2class">Senha:</h2>
                    <div class="centro">
                    <input class ="imput" type="text"/>
                    </div>
                    <h2 class="h2class">Confirmar Senha:</h2>
                    <div class="centro">
                    <input class ="imput" type="password"/>
                    </div>
                    <h2 class="h2class">Código do Diretor:</h2>
                    <div class="centro">
                    <input class ="imput" type="text"/>
                    </div>
                    <div class="botões">

                    
                        <button onClick={post}  class="botãocadastrar">Cadastrar</button>
                    <Link to="/">
                        <button  class="botãocadastrar">Voltar</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cadastro