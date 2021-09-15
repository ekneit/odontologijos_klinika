import Home from './views/Home';
import NotFound from "./views/NotFound";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Dashboard from "./views/admin/Dashboard";
import Doctors from "./views/Doctors";
import SingleDoctorPage from "./views/SingleDoctorPage";
import AddDoctor from "./views/admin/AddDoctor";
import AdminDoctors from "./views/admin/Doctors";
import DoctorEdit from "./views/admin/DoctorEdit";
import Auth from "./layouts/Auth";
import Admin from "./layouts/Admin";

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
        path: '/admin/',
        redirect: "/admin/dashboard",
        component: Admin,
        beforeEnter: isLogin,
        children: [
            {
                path: "/admin/dashboard",
                component: Dashboard,
                name:"Dashboard"
            },
            {
                path: "/admin/doctor/add",
                component: AddDoctor,
                name:"DoctorAdd"
            },
            {
                path: "/admin/doctors",
                component: AdminDoctors,
                name:"AdminDoctors"
            },
            {
                path: "/admin/doctors/edit/:id",
                component: DoctorEdit,
                name:"DoctorEdit"
            },
        ],

    }
];


export default {
    mode: 'history',
    routes: routes
}
