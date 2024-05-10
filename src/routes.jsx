import { BrowserRouter as Roteador, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Animais from './pages/Animais/Animais';
import Fotos from './pages/Fotos/Fotos';
import Cadastro from './pages/Cadastro/Cadastro';
import Login from './pages/Login/Login';
import ListaAnimais from './components/ListaAnimais/ListaAnimais';
import Depoimentos from './pages/Depoimentos/Depoimentos';

function AppRoutes() {
    return (
        <>
            <Roteador>
                <Routes>
                    <Route exact path='/' Component={Home} />
                    <Route path='/animais' Component={Animais} />
                    <Route path='/fotos' Component={Fotos} />
                    <Route path='/login' Component={Login} />
                    <Route path='/cadastro' Component={Cadastro} />
                    <Route path='/depoimentos' Component={Depoimentos} />
                    <Route path='/listaAnimais' Component={ListaAnimais} />
                </Routes>
            </Roteador>
        </>
    );
}

export default AppRoutes;