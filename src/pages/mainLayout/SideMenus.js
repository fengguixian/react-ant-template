import { Layout, Menu } from "antd"
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import { menusRoutes } from '../../router/routes'
import {
    TeamOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;

// 通过id判断是否有权限访问
function filterMenusFromMainRoutes(routes) {
    // 默认都有权限
    return routes;
}

// function MenusForItem(props){
//     let route = props.route;
//     if(route.children) {
//         const childs = route.children.map(ch => {
//             return (
//                 <Menu.Item key={ch.meta.key} icon={ch.meta.icon || TeamOutlined}>
//                     <Link key={ch.meta.key}  to={ch.path}>{ch.meta.title}</Link>
//                 </Menu.Item>
//             )
//         });
//         return (
//             <SubMenu key={route.meta.key} icon={route.meta.icon} title={route.meta.title}>
//                 {childs}
//             </SubMenu>
//         );
//     }else{
//         return (
//             <Menu.Item key={route.meta.key} icon={route.meta.icon}>
//                 <Link key={route.meta.key} to={route.path}>{route.meta.title}</Link>
//             </Menu.Item>
//         );
//     }
// }


function SideMenus() {
    let menus = filterMenusFromMainRoutes(menusRoutes);

    function menuClick(e) {
        console.log(`e: `, e);
    }

    return (
        <Sider width={256} style={{
            minHeight: 640,
        }}>
            <img src={logo} className="App-logo" alt="logo" />
            <Menu 
            theme="dark" 
            onClick={menuClick}
            mode="inline"
            >
                {
                    menus.map((route) => {
                        if(route.children) {
                            const childs = route.children.map(ch => {
                                return (
                                    <Menu.Item key={ch.meta.key} icon={ch.meta.icon || TeamOutlined}>
                                        <Link key={ch.meta.key}  to={ch.path}>{ch.meta.title}</Link>
                                    </Menu.Item>
                                )
                            });
                            return (
                                <SubMenu key={route.meta.key} icon={route.meta.icon} title={route.meta.title}>
                                    {childs}
                                </SubMenu>
                            );
                        }else{
                            return (
                                <Menu.Item key={route.meta.key} icon={route.meta.icon}>
                                    <Link key={route.meta.key} to={route.path}>{route.meta.title}</Link>
                                </Menu.Item>
                            );
                        }
                    })
                }
            </Menu>
        </Sider>
    );
}

export default SideMenus;