import { PageHeaderWrapper,PageHeader } from "@ant-design/pro-components";
import { Button, Card, Table } from "antd";
import React from "react";

const Character = () => {
  const onCreate = () => {
    window.open(`/root/character/create`);
  };
  const data = [
    {
      code: 'test1',
      name: '系统管理员',
      root: 'root',
    },
    {
      code: 'test2',
      name: '普通用户',
      root: 'pulic',
    }
  ];
  const columns = [
    {
      title: '序号',
      dataIndex: 'No',
      render: (_record, _text, index) => <span>{index+1}</span>,
      
    },
    {
      title: '编号',
      dataIndex: 'code',
    },
    {
      title: '角色名',
      dataIndex: 'name',
    },
    {
      title: '权限',
      dataIndex: 'access',
    },
    {
      title: '操作',
      dataIndex: 'operation',
    },
  ];
  const extra = () => {
    <Button>新建用户</Button>
  };

  return (
    <PageHeader title='角色管理' extra={extra}>
      <Card>
        <Button type="primary" onClick={onCreate}>新建角色</Button>
        <Table
        columns={columns}
        dataSource={data}
        />
      </Card>
    </PageHeader>
  );
};

export default (Character);
