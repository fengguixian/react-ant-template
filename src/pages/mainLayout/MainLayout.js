import { Layout } from "antd"
import { Route, Routes, Navigate } from "react-router-dom";
import SideMenus from "./SideMenus";
import { menusRoutes } from '../../router/routes'
import Page404 from "../errors/Page404";
import './MainLayout.css';
import ContentHeader from "./ContentHeader";

const { Content } = Layout;

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
                        <ContentHeader />
                        <Content
                        style={{
                            background: '#ffffff',
                            padding: 24,
                            margin: 24
                        }}
                        >
                            <Routes>
                                {mRoutes}
                                <Route key='main' path='/' exact element={<Navigate to='home' />}></Route>
                                <Route key='page404' path='/*' exact element={<Page404 />}></Route>
                            </Routes>
                        </Content>
                    </Layout>
                </Layout>
        ) : (
            <Navigate to="/login"/>
        )
    );
}

export default MainLayout;