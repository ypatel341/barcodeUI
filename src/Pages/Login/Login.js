import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { tryLogin } from "../../Actions/LoginAction"

class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    var map = { username: e.target.username.value, password: e.target.password.value}
    this.props.tryLogin(map)
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="loginform" style={{maxWidth: "300px", display: "block", marginLeft: "auto", marginRight: "auto", marginTop: "5%"}}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="loginformforgot" style={{float: "right"}} href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" style={{width: "100%"}} className="loginformbutton">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
  }
}

function  mapDispatchToProps(dispatch){
  return {
    tryLogin: (loginInfo) => dispatch(tryLogin(loginInfo))
  }
}

const LoginForm = Form.create()(Login)
export default connect(mapStateToProps,mapDispatchToProps) (LoginForm)
