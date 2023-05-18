import { Link, useNavigate } from "react-router-dom"
import req from "../../requests"
import "./style.css"
import { useEffect, useState } from "react"
import axios from "axios"

function Cadastro(){
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [matricula, setMatricula] = useState('');
    const [endereco,setEndereco] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaconfirmação, setconfirmação] = useState('');

    const post = () =>{
        let input = document.getElementById("codigo-input")

        if(senha==senhaconfirmação){
            axios({
            method:"post",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:"http://localhost:8080/api/aluno",
            data:{
                nome:nome,
                endereco:endereco,
                matricula:matricula,
                senha:senha,
                diretorCod:input.value
            }
        })
        .then(()=>{
            alert("Usuário Cadastrado")
            navigate("/")
        })
        .catch(error => console.log(error))
        }
        else{
            alert("Senha incompatíveis")
        }
    }

    
         return(
            <div className="background">
                <div className="signup-form">
                    <div className='logo'>Uni<span>G</span></div>
                    <div class="text-campo">
                        <label for="matricula-input" className="login-label">Matricula</label> 
                        <input className="input" id="matricula-input" type="text"  onChange={(event) => setMatricula(event.target.value)}/>
                    </div>
                    <div class="text-campo">
                        <label for="name-input" className="login-label">Nome Completo</label>
                        <input className="input" id="name-input" type="text" onChange={(event) => setNome(event.target.value)}/>
                    </div>
                    <div class="text-campo">
                        <label for="matricula-input" className="login-label">Endereço</label> 
                        <input className="input" id="endereco-input" type="text"  onChange={(event) => setEndereco(event.target.value)}/>
                    </div>
                    <div class="text-campo">
                        <label for="pass-input" className="login-label">Senha</label>
                        <input className="input" id="pass-input" type="password" onChange={(event) => setSenha(event.target.value)}/>
                    </div>
                    <div class="text-campo">
                        <label for="confirm-pass-input" className="login-label">Confirmar Senha</label>
                        <input className="input" id="confirm-pass-input" type="password" onChange={(event) => setconfirmação(event.target.value)}/>
                    </div>
                    <div class="text-campo">
                        <label for="matricula-input" className="login-label">Código do diretor</label> 
                        <input className="input" id="codigo-input" type="text" />
                    </div>
                    <div class="botões">

                        <button onClick={post}  className="signup-btn">Cadastrar</button>
                    <Link to="/">
                        <button  className="signup-btn">Voltar</button>
                    </Link>

                    </div>
                </div>
            </div>
        )
    }
    
    export default Cadastro