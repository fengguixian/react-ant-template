import './Login.css'
import { Form, Input, Button } from 'antd';
import {
    IdcardOutlined,
    LockOutlined,
} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

function LoginFrom({ onConfirm }) {
    const [form] = Form.useForm();
    function loginFromConfirm() {
        form.validateFields().then((values) => {
            form.resetFields();
            onConfirm(values);
        }).catch((info) => {
            console.log('Validate failed:', info);
        });
    }

    return (
        <div className='login-box'>
            <div className='login-box_title'>欢迎使用</div>
            <Form form={form} className='login-box_from' layout="vertical">
                <Form.Item
                name="account"
                rules={[
                    {
                      required: true,
                      message: '请输入账号!',
                    },
                ]}
                >
                    <Input className='login-box-from_account' placeholder='请输入账号' prefix={<IdcardOutlined />} />
                </Form.Item>
                <Form.Item
                name="password"
                rules={[
                    {
                      required: true,
                      message: '请输入密码!',
                    },
                ]}
                >
                    <Input.Password className='login-box-from_password' placeholder='请输入密码' prefix={<LockOutlined />} />
                </Form.Item>
            </Form>
            <Button className='login-box_btn' type='primary' onClick={loginFromConfirm}>登录</Button>
        </div>
    );
}

const Login = (props) => {
    const navigate = useNavigate();
    return (
        <div className='login-root-div'>
            <LoginFrom 
            onConfirm={() => {
                window.localStorage.setItem('token', '123');
                navigate('/')
            }}/>
        </div>
    )
}

export default Login;