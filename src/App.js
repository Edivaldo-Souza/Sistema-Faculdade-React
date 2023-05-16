import TelaPrincipal from "./pages/TelaPrincipal"
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Aluno from "./pages/Aluno";
import Login from "./pages/Login";
import Professor from "./pages/Professor";
import Disciplina from "./pages/Disciplina";
import Turma from "./pages/Turma";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="/main" element={<TelaPrincipal/>}/>
        <Route path='/Alunos' element={<Aluno/>}/>
        <Route path="/Professores" element={<Professor/>}/>
        <Route path="/Disciplinas" element={<Disciplina/>}/>
        <Route path="/Turmas" element={<Turma/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
