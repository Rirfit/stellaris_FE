import Home from '../pages/Home'
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import CriancaCadastro from '../pages/CadastroCrianca';
import Jogos from '../pages/SelecaoJogos';
import Blog from '../pages/Blog';

import { Route, Routes as Switch } from 'react-router-dom';
export function AppRoutes(){
    return(
        <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/cadastroCrianca" element={<CriancaCadastro />} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/jogos" element={<Jogos/>} />
        </Switch>
    )
}