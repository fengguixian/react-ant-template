import { Button, Layout, Avatar, Popover, Modal } from "antd";
import { connect } from "react-redux"
import './ContentHeader.css';
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';

const { Header } = Layout;

const UserInfoPopoverContent = (props) => {
    const navigate = useNavigate();
    const [isLogoutModalShow, setIsLogoutModalShow] = useState(false);

    function logoutModalOK() {
        setIsLogoutModalShow(false);
        window.localStorage.setItem('token', '');
        navigate('login');
    }

    function logoutModalCancel() {
        setIsLogoutModalShow(false);
    }

    return (
        <div>
            <Button type='primary' danger onClick={() => {
                setIsLogoutModalShow(true);
            }}>Logout</Button>

            <Modal
            title="温馨提示"
            visible={isLogoutModalShow}
            onOk={logoutModalOK}
            onCancel={logoutModalCancel}
            okText="确认"
            cancelText="取消"
            >
                <p>您确定需要退出登录吗？</p>
            </Modal>
        </div>
    )
}

const ContentHeader = (props) => {
    return (
        <Header 
        className='content-header'
        style={
            {
                background: 'white',
                padding: '0px 25px 0px 10px',
                display: 'flex',
                justifyContent: 'space-between'
            }
        }>
            <div>
                <Button type='text' onClick={props.foldHandler}>
                    {
                        props.fold ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                    }
                </Button>
                <span className='ch_title'>Welcome To Gavin React Template</span>
            </div>
            <div>
                <Popover content={<UserInfoPopoverContent />}>
                    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>G</Avatar>
                </Popover>
            </div>
        </Header>
    );
}

const mapStateToProps = state => {
    return {
      fold: state.sider.fold,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      foldHandler: () =>
        dispatch({ type: 'SIDER_ACTION_CHANGE'}),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContentHeader);