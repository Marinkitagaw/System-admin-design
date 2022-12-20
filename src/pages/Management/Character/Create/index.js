import { PageHeaderWrapper,PageHeader } from "@ant-design/pro-components";
import { history } from "@umijs/max";
import { Button, Card, Form, Input, message, Option, Select, Radio } from "antd";
import React from "react";

const CreateCharacter = () => {
  const { Option } = Select;
  const subForm = () => {
    history.go(-1);
    message.success();
  };
  const onCancel = () => {
    history.go(-1);
  };
  return (
    <PageHeader title='新建角色'>
      <Card>
        <Form
          labelCol={{span: 4}}
          wrapperCol={{span: 10}}
        >
          <Form.Item label='管理员名称' name='name' required>
            <Input placeholder="请输入用户名"/>
          </Form.Item>
          <Form.Item label='管理员密码' name='password' required>
            <Input.Password placeholder="请输入管理员密码"/>
          </Form.Item>
          <Form.Item label='确认密码' required>
            <Input.Password placeholder="请再一次输入密码"/>
          </Form.Item>
          <p>请选择角色权限</p>
          <Form.Item label='用户管理权限' required>
            <Radio.Group>
              <Radio value={true}>是</Radio>
              <Radio value={false}>否</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label='菜单管理权限' required>
            <Radio.Group>
              <Radio value={true}>是</Radio>
              <Radio value={false}>否</Radio>
            </Radio.Group>
          </Form.Item>
          {/* <Form.Item label='权限' name='access' required wrapperCol={{span: 4}}>
            <Select allowClear placeholder='请选择用户权限'>
              <Option key='pulic'value='pulic' >普通用户</Option>
              <Option key='root2'value='root2' >二级管理员</Option>
              <Option key='root1'value='root1' >一级管理员</Option>
            </Select>
          </Form.Item> */}
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

export default (CreateCharacter);
