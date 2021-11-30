import Login from '../pages/login/Login';
import MainLayout from '../pages/mainLayout/MainLayout';
import Home from "../pages/home/Home";
import Users from "../pages/users/Users";
import AdminUsers from "../pages/users/AdminUsers";
import GuestUsers from "../pages/users/GuestUsers";
import UserDetail from '../pages/users/UserDetail';
import About from "../pages/about/About";
import Test from '../pages/test/Test';

import {
    TeamOutlined,
    HomeFilled,
    InfoCircleFilled,
    AppstoreFilled,
    ProfileFilled,
    AppleFilled,
    AndroidFilled
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
        path: 'home',
        component: Home,
        meta: {
            title: 'Home',
            isNeedLogin: true,
            icon: <HomeFilled />,
            key: 'home',
            authIds: []
        }
    },
    {
        path: 'about',
        component: About,
        meta: {
            title: 'About',
            isNeedLogin: true,
            icon: <InfoCircleFilled />,
            key: 'about',
            authIds: []
        }
    },
    {
        path: 'test',
        component: Test,
        meta: {
            title: 'Test',
            isNeedLogin: true,
            icon: <AppstoreFilled />,
            key: 'test',
            authIds: []
        }
    },
    {
        path: 'users',
        component: Users,
        meta: {
            title: 'Users',
            isNeedLogin: true,
            icon: <ProfileFilled />,
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
                    icon: <AppleFilled />,
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
                    icon: <AndroidFilled />,
                    key: 'guests',
                    authIds: []
                }
            },
            {
                path: 'users/detail/',
                component: UserDetail,
                hiden: true,
                meta: {
                    title: 'Detail',
                    isNeedLogin: true,
                    icon: <AndroidFilled />,
                    key: 'userDetail',
                    authIds: []
                }
            },
        ]
    },
]

export const mainLayoutRoutes ={
        path: '/*',
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