import Login from '../pages/login/Login';
import MainLayout from '../pages/mainLayout/MainLayout';
import Home from "../pages/home/Home";
import Users from "../pages/users/Users";
import AdminUsers from "../pages/users/AdminUsers";
import GuestUsers from "../pages/users/GuestUsers";
import About from "../pages/about/About";
import Test from '../pages/test/Test';
import {
    TeamOutlined
} from '@ant-design/icons';

export const loginRoutes = [
    {
        path: 'login',
        component: Login,
        meta: {
            title: '',
            isNeedLogin: false,
            icon: <TeamOutlined />,
            key: 'login'
        }
    }
]

export const menusRoutes = [
    {
        path: '/home',
        component: Home,
        meta: {
            title: 'Home',
            isNeedLogin: true,
            icon: <TeamOutlined />,
            key: 'home',
            authIds: []
        }
    },
    {
        path: '/users',
        component: Users,
        meta: {
            title: 'Users',
            isNeedLogin: true,
            icon: <TeamOutlined />,
            key: 'users',
            authIds: []
        },
        children: [
            {
                path: 'users/admins',
                component: AdminUsers,
                meta: {
                    title: 'Admins',
                    isNeedLogin: true,
                    icon: <TeamOutlined />,
                    key: 'admins',
                    authIds: []
                }
            },
            {
                path: 'users/guests',
                component: GuestUsers,
                meta: {
                    title: 'Guests',
                    isNeedLogin: true,
                    icon: <TeamOutlined />,
                    key: 'guests',
                    authIds: []
                }
            }
        ]
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: 'About',
            isNeedLogin: true,
            icon: <TeamOutlined />,
            key: 'about',
            authIds: []
        }
    },
    {
        path: '/test',
        component: Test,
        meta: {
            title: 'Test',
            isNeedLogin: true,
            icon: <TeamOutlined />,
            key: 'test',
            authIds: []
        }
    },
]

export const mainLayoutRoutes ={
        path: '/',
        component: MainLayout,
        meta: {
            title: '',
            isNeedLogin: true,
            icon: <TeamOutlined />,
            key: 'main',
            authIds: []
        },
        children: menusRoutes
};

export const routes = [
    ...loginRoutes,
    mainLayoutRoutes,
];