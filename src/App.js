import TelaPrincipal from "./pages/TelaPrincipal"
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Aluno from "./pages/Aluno";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="/main" element={<TelaPrincipal/>}/>
        <Route path="/Cadastro" element={<Cadastro/>}/>
        <Route path='/Alunos' element={<Aluno/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
