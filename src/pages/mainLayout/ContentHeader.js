import { Button, Layout } from "antd";
import { connect } from "react-redux"
import './ContentHeader.css';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';

const { Header } = Layout;

const ContentHeader = (props) => {
    return (
        <Header 
        className='content-header'
        style={
            {
                background: 'white',
                padding: '0px 10px'
            }
        }>
            <Button type='text' onClick={props.foldHandler}>
                {
                    props.fold ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                }
            </Button>
            <span className='ch_title'>Welcome To Gavin React Template</span>
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