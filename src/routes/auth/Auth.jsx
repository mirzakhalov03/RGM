import React from 'react';
import { Form, Input, Button } from 'antd';
import Trademark from '../../components/navLogo/Trademark';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Auth = () => {
    const navigate = useNavigate(); 

    const onFinish = (values) => {
        console.log('Success:', values);
        if (values.name === 'rgm admin' && values.password === '7730') {
            toast.success('Login successful');
            localStorage.setItem("rgm_admin_token", `${import.meta.env.VITE_ADMIN_TOKEN}`)
            setTimeout(() => {
                navigate('/admin');
            }, 3000);
        } else {
            toast.error('Invalid credentials');
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='min-h-[100vh] w-full bg-[#d9d9d9] flex items-center justify-center'>
            <div className='w-[400px] h-[400px] bg-[white] rounded-md p-5 px-10'>
                <Link to="/"><Trademark /></Link>
                <h2 className='text-center text-[22px] mb-[30px] text-[--headline]'>Admin Panel</h2>
                <Form
                    name="basic"
                    layout='vertical'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 24 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your admin name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" style={{ width: "100%" }} htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Auth;
