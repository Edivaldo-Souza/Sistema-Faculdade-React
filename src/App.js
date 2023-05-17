//import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from "./pages/Login";
import TelaPrincipal from "./pages/TelaPrincipal"
import Cadastro from "./pages/Cadastro";
import Aluno from "./pages/Aluno";
import Professor from "./pages/Professor";
import Turma from './pages/Turma';
import Disciplina from "./pages/Disciplina";
import Teste from './pages/Components/Teste';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/main' element={<TelaPrincipal/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path='/alunos' element={<Aluno/>}/>
          <Route path='/professores' element={<Professor/>}/>
          <Route path='/turmas' element={<Turma/>}/>
          <Route path='/disciplinas' element={<Disciplina/>}/>
          <Route path='/teste' element={<Teste/>}/>
        </Routes>      
      </BrowserRouter>
    </div>
    
  );
}
/*
*/
export default App;
