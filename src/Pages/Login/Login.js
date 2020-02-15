import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const formItemLayout = {
  // labelCol: {
  //   xs: { span: 3 },
  //   sm: { span: 4 },
  // },
  // wrapperCol: {
  //   xs: { span: 3 },
  //   sm: { span: 12 },
  // },
};

const CustomizedForm = Form.create({

  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
})(props => {
  const { getFieldDecorator } = props.form;
  return (
    <Form {...formItemLayout} className="login-form">
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
        <a className="login-form-forgot" href="">
          Forgot password
        </a>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
});

export default class Login extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    return (
      <div>
        <CustomizedForm onChange={this.handleSubmit} />
      </div>
    );
  }
}
