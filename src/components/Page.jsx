import React from "react";
import { Layout as AntLayout } from "antd";
import styled from "styled-components";

const { Header: AntHeader, Content: AntContent, Footer: AntFooter } = AntLayout;

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

      <AntContent style={{ padding: "0 50px" }}>
        content
      </AntContent>

      <AntFooter style={{ textAlign: "center" }}>
        footer
      </AntFooter>
    </Layout>
  );
}

