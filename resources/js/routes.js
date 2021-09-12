import Home from './components/Home';
import Login from "./components/Login";

export default{
    mode: 'history',
    linkActiveClass:'bg-gray-200',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: Login
        }
    ]
}
