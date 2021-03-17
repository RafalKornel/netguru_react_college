import React from "react";
import styled from "styled-components";
import { Layout as AntLayout } from "antd";
import GoogleMap from "./GoogleMap";

const { Header: AntHeader, Content: AntContent } = AntLayout;

const Logo = styled.h2`
  color: #ffffff;
`;

const Layout = styled(AntLayout)`
  min-height: 100vh;
`;

export default function Page(props) {
  return (
    <Layout className="layout">
      <AntHeader>
        <Logo>Wikipedia Map</Logo>
      </AntHeader>

      <AntContent>
        <GoogleMap />
      </AntContent>
    </Layout>
  );
}
