import "./App.css";
import React from "react";
import styled from "styled-components";
import { Layout as AntLayout } from "antd";
import MapPage from "./pages/MapPage";

const { Header: AntHeader, Content: AntContent } = AntLayout;

const Logo = styled.h2`
  color: #ffffff;
`;

const Layout = styled(AntLayout)`
  min-height: 100vh;
`;

export default function App(props) {
  return (
    <Layout className="layout">
      <AntHeader>
        <Logo>Wikipedia Map</Logo>
      </AntHeader>

      <AntContent>
        <MapPage />
      </AntContent>
    </Layout>
  );
}
