import styled from "styled-components";
import { Tooltip } from "antd";
import { emit } from "./mediator";

const Circle = styled.div`
  background-color: #ff7323e0;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  box-shadow: 0px 0px 5px #ffa769;
  opacity: 0.7;
  transform: translate(-50%, -50%);
  transition: all ease 400ms;

  &:hover {
    cursor: pointer;
    opacity: 1;
    background-color: #ff3d23;
  }
`;

export default function Marker({ title, pageId }) {
  return (
    <Tooltip title={title}>
      <Circle onClick={() => emit("markerClicked", { pageId })} />
    </Tooltip>
  );
}