import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Link from "next/link";

const { Header, Content, Footer, Sider } = Layout;

const sideItems = [
  {
    path: "all-project",
    name: "All Project",
  },
  {
    path: "task-management",
    name: "Task Management",
  },
];

// const items = [
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   UserOutlined,
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav1 ${index + 1}`,
// }));

const items = sideItems.map((item) => ({
  key: item.name,
  label: <Link href={`/dashboard/${item.path}`}>{item.name}</Link>,
}));

const DashboardMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="flex items-center justify-center my-5">
          <h1 className="text-white text-xl font-semibold">NHP Management</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 5,
              minHeight: 360,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          NH Project Management ©{new Date().getFullYear()} Designed By Ahshan Habib
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardMenu;
