import Home from '../pages/Home'
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import CriancaCadastro from '../pages/CadastroCrianca';

import { Route, Routes as Switch } from 'react-router-dom';
export function AppRoutes(){
    return(
        <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/cadastroCrianca" element={<CriancaCadastro />} />
        </Switch>
    )
}