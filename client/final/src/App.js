import './App.css';

//importando bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

// Importando o gerenciador de rotas
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Login from "./pages/Login"
import Home from "./pages/Home"
import CadastroUsuario from "./pages/CadastroUsuario"
import CadastroProduto from "./pages/CadastroProduto"
import EditarProduto from "./pages/EditarProduto"
import NavBarra from "./components/NavBarra"

function App() {
  return (
    <div className="App">
      <NavBarra/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='login' element={<Login />}/>
          <Route path='/home' element={<Home />} />
          <Route path='/cadastrar' element={<CadastroUsuario/>} />
          <Route path='/produtos/cadastrar/' element={<CadastroProduto />} />
          <Route path='/produtos/editar/' elemen={<EditarProduto />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
