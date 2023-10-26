import React from "react";
import { Button, ConfigProvider } from "antd";
import Layout from "./layout";
import zhCN from "antd/locale/zh_CN";
const App = () => (
  <div className="App">
    <ConfigProvider locale={zhCN}>
      <Layout />
    </ConfigProvider>
  </div>
);

export default App;
