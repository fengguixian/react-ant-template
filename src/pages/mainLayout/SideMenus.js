import { Layout, Menu } from "antd"
import { Link } from 'react-router-dom';
import { menusRoutes } from '../../router/routes'
import './SideMenus.css'
import { connect } from "react-redux"
import React, { useState, useEffect } from "react";

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


function SideMenus(props) {
    let menus = filterMenusFromMainRoutes(menusRoutes);

    const [defaultOpenKeys, setDefaultOpenKeys] = useState(['home']);
    const [defaultSelectedKeys, setDefaultSelectedKeys] = useState(['home']);

    function menuClick(e) {
        console.log(`e: `, e);
    }

    // 刷新页面，处理默认选中
    function handleDefaultSelect(){
        // let menuConfigKeys = [];
        // menus.forEach((item) => {
        //     menuConfigKeys.push(item.meta.key);
        // });
        // const pathname = 'home';
        // const currentKey = 'home';
        // if (menuConfigKeys.indexOf(currentKey) === 0) {
        //     //setDefaultOpenKeys([currentKey]);
        //     //setDefaultSelectedKeys([pathname]);
        // }else{
        //     console.log(`indexof: `, menuConfigKeys.indexOf(currentKey))
        // }
    };

    useEffect(() => {
        handleDefaultSelect();
    });

    return (
        <Sider 
        className='sider'
        theme='light'
        width={256} 
        style={{
            minHeight: 640,
            padding: '10px 0px 0px 0px'
        }}
        collapsible
        collapsed={props.fold}
        trigger={null}
        >
            <Menu 
            onClick={menuClick}
            mode="inline"
            defaultOpenKeys={ defaultOpenKeys }
            defaultSelectedKeys={ defaultSelectedKeys }
            >
                {
                    menus.map((route) => {
                        if(route.children) {
                            const childs = route.children.map(ch => {
                                return (
                                    <Menu.Item key={ch.meta.key} icon={ch.meta.icon}>
                                        <Link key={ch.meta.key} to={ch.path}>{ch.meta.title}</Link>
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

const mapStateToProps = state => {
    return {
        fold: state.sider.fold,
    }
}

export default connect(
    mapStateToProps
)(SideMenus);