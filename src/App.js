import TelaPrincipal from "./pages/TelaPrincipal"
import Professor from "./pages/Professor";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Aluno from "./pages/Aluno";
import Disciplina from "./pages/Disciplina";
import Turma from "./pages/Turma";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="/main" element={<TelaPrincipal/>}/>
        <Route path='/Professores' element={<Professor/>}/>
        <Route path='/Alunos' element={<Aluno/>}/>
        <Route path="/Disciplinas" element={<Disciplina/>}/>
        <Route path="/Turmas" element={<Turma/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
