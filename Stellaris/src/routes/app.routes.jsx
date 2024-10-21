import Home from '../pages/Home'
import Login from '../pages/Login';
import { Route, Routes as Switch } from 'react-router-dom';
export function AppRoutes(){
    return(
        <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Switch>
    )
}