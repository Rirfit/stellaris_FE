import Home from '../pages/Home'
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import CriancaCadastro from '../pages/CadastroCrianca';

import Perfil from '../pages/Perfil';
import MinhasInformacoes from '../pages/Perfil Minhas Informações';
import Conta from '../pages/Perfil Conta';
import AlterarDados from '../pages/Perfil Alterar Dados';

import Jogos from '../pages/SelecaoJogos';
import Blog from '../pages/Blog';
import Sobre from '../pages/Sobre';

import IA from '../pages/IaSelect';

import { Route, Routes as Switch } from 'react-router-dom';

export function AppRoutes(){
    return(
        <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/cadastroCrianca" element={<CriancaCadastro />} />

            <Route path="/perfil" element={<Perfil />} />
            <Route path="/minhasInformacoes" element={<MinhasInformacoes />} />
            <Route path="/conta" element={<Conta />} />
            <Route path="/alterarDados" element={<AlterarDados />} />

            <Route path="/jogos" element={<Jogos/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/sobre" element={<Sobre/>} />

            <Route path="/ia" element={<IA/>} />
        </Switch>
    )
}