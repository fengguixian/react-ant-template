import { Layout } from "antd"
import { Route, Routes, Navigate } from "react-router-dom";
import SideMenus from "./SideMenus";
import { menusRoutes } from '../../router/routes'
import Page404 from "../errors/Page404";
import AdminUsers from "../../pages/users/AdminUsers";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Test from "../../pages/test/Test";
import Users from "../../pages/users/Users";
import GuestUsers from "../../pages/users/GuestUsers";
import './MainLayout.css';

const { Content, Header } = Layout;

const MainLayout = (props) => {
    let token = window.localStorage.getItem('token');
    let mRoutes = menusRoutes.map(item => {
            if(item.children) {
                return (
                    //<Route exact key={item.path} path={item.path} element={<item.component />}>
                    //    {
                            item.children.map(sub => {
                                return <Route exact key={sub.path} path={sub.path} element={<sub.component />}></Route>
                            })
                    //   }
                    //</Route>
                )
            }else{
                return (
                    <Route exact key={item.path} path={item.path} element={<item.component />}></Route>
                )
            }
        }
    );
    return (
            (token && token.length>0) ? (
                <Layout>
                    <SideMenus />
                    <Layout>
                        <Header className='header' style={{background: 'white'}}>Welcome To Gavin React Template</Header>
                        <Content
                        style={{
                            background: '#ffffff',
                            padding: 24,
                            margin: 24
                        }}
                        >
                            <Routes>
                                {mRoutes}
                                <Route key='page404' path='/*' exact element={<Page404 />}></Route>
                            </Routes>
                            {/* <Routes>
                                <Route key='home' path='home' element={<Home />}></Route>
                                <Route key='about' path='about' element={<About />}></Route>
                                <Route key='test' path='test' element={<Test />}></Route>
                                <Route key='users' path='users' element={<Users />}></Route>
                                <Route key='admins' path='users/admins' element={<AdminUsers />}></Route>
                                <Route key='guests' path='users/guests' element={<GuestUsers />}></Route>
                            </Routes> */}
                        </Content>
                    </Layout>
                </Layout>
        ) : (
            <Navigate to="/login"/>
        )
    );
}

export default MainLayout;