import { PageHeader } from '@ant-design/pro-layout';
import { Card, Form, Input, Select, Button, Table, Space } from 'antd';
import React from 'react';

const UserManage = () => {
  const onCreate = () => {
    window.open(`/root/user/create`);
  };
  const data = [
    {
      code: 'test1',
      name: 'jguo',
      root: 'root',
    },
    {
      code: 'test2',
      name: '测试员',
      root: 'pulic',
    },
  ];
  const columns = [
    {
      title: '序号',
      dataIndex: 'No',
      width: 60,
      render: (_record, _text, index) => <span>{index + 1}</span>,
    },
    {
      title: '编号',
      dataIndex: 'code',
    },
    {
      title: '用户名',
      dataIndex: 'name',
    },
    {
      title: '权限',
      dataIndex: 'access',
    },
    {
      title: '所属部门',
      dataIndex: '',
    },
    {
      title: '职位/职称',
      dataIndex: '',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_record, _text, index) => (
        <Space>
          <Button type="link">查看</Button>
          <Button danger type="link">
            删除
          </Button>
          <Button type="link">重置密码</Button>
        </Space>
      ),
    },
  ];
  const extra = () => {
    <Button>新建用户</Button>;
  };

  return (
    <PageHeader title="用户管理" extra={extra}>
      <Card>
        <Button type="primary" onClick={onCreate}>
          新建用户
        </Button>
        <Table columns={columns} dataSource={data} />
      </Card>
    </PageHeader>
  );
};

export default UserManage;
