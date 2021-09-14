import Home from './views/Home';
import NotFound from "./views/NotFound";
import Auth from "./layouts/Auth";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Dashboard from "./views/Dashboard";
import Doctors from "./views/Doctors";
import SingleDoctorPage from "./views/SingleDoctorPage";

const isLogin = (to, from, next) => {
    const token = localStorage.getItem("access_token");
    if (token) {
        next();
    } else {
        return next({name: 'Login'})
    }
}
const notLogin = (to, from, next) => {
    const token = localStorage.getItem("access_token");
    if (!token) {
        next();
    } else {
        return next({name: 'Dashboard'})
    }
}


const routes = [
    {
        path: '*',
        component: NotFound
    },
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/doctor',
        component: Doctors,
        name: 'Doctors'
    },
    {
        path: '/doctor/:id',
        component: SingleDoctorPage,
        name: 'SingleDoctorPage'
    },
    {
        path: '/auth',
        redirect: "/auth/login",
        component: Auth,
        beforeEnter: notLogin,
        children: [
            {
                path: "/auth/login",
                component: Login,
                name:"Login"
            },
            {
                path: "/auth/register",
                component: Register,
                name: "Register"
            },
        ],

    },
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'Dashboard',
        beforeEnter: isLogin,

    }
];


export default {
    mode: 'history',
    routes: routes
}
