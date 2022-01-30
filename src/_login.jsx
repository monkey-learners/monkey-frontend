import { Form, Input, Checkbox, Button, Row, Col } from "antd";
import React from "react";
import "./css/login.css";
const Login = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  const onFinishFailed = (errors) => {
    console.log(errors);
  };
  return (
    <React.Fragment>
      <Row className="content-design">
        <Col span={6} offset={4} className="left-layout-design">
          <h1 className="site-page-header" key="Login">
            Login
          </h1>
        </Col>
        <Col span={12} className="right-form-design">
          <Form
            name="login"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 10 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Login;
