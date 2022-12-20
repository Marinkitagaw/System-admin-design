import { PageHeaderWrapper,PageHeader } from "@ant-design/pro-components";
import { Card } from "antd";
import React from "react";

const Menu = () => {
  return (
    <PageHeader title='菜单管理'>
      <Card>
        <div>欢迎回来！系统管理员</div>
      </Card>
    </PageHeader>
  );
};

export default (Menu);
