import { PageHeader } from '@ant-design/pro-layout';
import { Card, Form, Input, Select, Button } from "antd";
import React from "react";

const CreateUser = () => {
  const { Option } = Select;
  const subForm = () => {
    history.go(-1);
    message.success();
  };
  const onCancel = () => {
    history.go(-1);
  };
  return (
    <PageHeader title='新建用户'>
      <Card>
        <Form
          labelCol={{span: 4}}
          wrapperCol={{span: 12}}
        >
          <Form.Item label='用户名' name='name' required>
            <Input placeholder="请输入用户名"/>
          </Form.Item>
          <Form.Item label='电话号码' name='phonenum' required>
            <Input placeholder="请输入电话号码"/>
          </Form.Item>
          <Form.Item label='电子邮箱' name='email' required>
            <Input placeholder="请输入电子邮箱"/>
          </Form.Item>
          <Form.Item label='证件号' name='selfid' required>
            <Input placeholder="请输入证件号"/>
          </Form.Item>
          <Form.Item label='密码' name='password' required>
            <Input.Password placeholder="请输入密码"/>
          </Form.Item>
          <Form.Item label='确认密码' required>
            <Input.Password placeholder="请再一次输入密码"/>
          </Form.Item>
          <Form.Item label='权限' name='access' required wrapperCol={{span: 4}}>
            <Select allowClear placeholder='请选择用户权限'>
              <Option key='pulic'value='pulic' >普通用户</Option>
              <Option key='root'value='root' >系统管理员</Option>
            </Select>
          </Form.Item>
          <Form.Item  >
            <p style={{ textAlign: 'center' }}>
              <Button type="primary" style={{marginRight: '15px'}} onClick={subForm}>确认</Button>
              <Button onClick={onCancel}>取消</Button>
            </p>
          </Form.Item>
        </Form>
      </Card>
    </PageHeader>
  );
};

export default CreateUser;