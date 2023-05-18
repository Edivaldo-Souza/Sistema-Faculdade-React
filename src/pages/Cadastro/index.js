import { Link } from "react-router-dom"
import req from "../../requests"
import "./style.css"
import { useEffect, useState } from "react"
import axios from "axios"
function Cadastro(){
    const [nome, setNome] = useState('');
    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaconfirmação, setconfirmação] = useState('');
    const Cadast = async () =>{
       
        if (senha === senhaconfirmação) {
            const aluno = {
                nome: nome,
                matricula: matricula,
                senha: senha,
            }
            try {
                const response = await axios.post("http://localhost:8080/api/Cadastro", aluno);
                console.log('Cadastro realizado:', response.data);

              } catch (error) {
                console.error('Erro ao cadastrar:', error);
              }
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
                        <label for="pass-input" className="login-label">Senha</label>
                        <input className="input" id="pass-input" type="password" onChange={(event) => setSenha(event.target.value)}/>
                    </div>
                    <div class="text-campo">
                        <label for="confirm-pass-input" className="login-label">Confirmar Senha</label>
                        <input className="input" id="confirm-pass-input" type="password" onChange={(event) => setconfirmação(event.target.value)}/>
                    </div>
                    <div class="botões">
                        <Link to="/main"><button onClick={Cadast} class="signup-btn">Cadastrar</button></Link>
                    </div>
                </div>
            </div>
        )
    }
    
    export default Cadastro