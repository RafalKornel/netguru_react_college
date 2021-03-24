import "./App.css";
import React from "react";
import styled from "styled-components";
import { Layout as AntLayout } from "antd";
import MapPage from "./pages/MapPage";
import Header from "./components/Header";
import ArticleModal from "./components/ArticleModal";

const { Content: AntContent } = AntLayout;

const Layout = styled(AntLayout)`
  min-height: 100vh;
`;

export default function App(props) {
  return (
    <Layout className="layout">
      <Header />
      <ArticleModal />
      <AntContent>
        <MapPage />
      </AntContent>
    </Layout>
  );
}
