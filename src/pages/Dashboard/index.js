import { PageHeaderWrapper,PageHeader } from "@ant-design/pro-components";
import { Card } from "antd";
import React from "react";

const Dashboard = (props) => {
  return (
    <PageHeader title='系统控制台'>
      <Card>
        <div>欢迎回来！系统管理员</div>
      </Card>
    </PageHeader>
  );
};

export default Dashboard;
