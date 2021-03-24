import React from "react";
import { Modal } from "antd";
import { useMarkersStore } from "../pages/MapPage/store";
import styled from "styled-components";

// const StyledModal = styled(Modal)`
//   position: absolute;
//   width: 70%;
//   height: 80%;

//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
// `;

const Iframe = styled.iframe`
  border: none;
  width: 100%;
`;

export default function ArticleModal() {
  const [
    { isModalVisible, articleUrl },
    { setIsModalVisible },
  ] = useMarkersStore();

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      title="Wikipedia"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      style={{ display: "flex", placeContent: "center" }}
    >
      <Iframe
        src={articleUrl?.replace("wikipedia", "m.wikipedia")}
        title="Wikipedia"
        width={"500"}
        height={"500"}
      />
    </Modal>
  );
}
