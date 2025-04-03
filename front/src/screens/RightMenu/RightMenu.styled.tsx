import styled from "styled-components";

export const RightMenuContainer = styled.aside`
  position: fixed;
  display: flex;
  top: 20px;
  right: 0;
  z-index: 1;
  height: 100vh;
  width: 20vw;
  padding: 0px 32px;
`;

export const RightMenuBottom = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
`;
export const ChatContainerClose = styled.div`
  background-color: rgba(240, 248, 255, 0.8);
  width: 20vw;
  height: 60px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  text-align: center;
  align-content: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(240, 248, 255);
    outline: #aa01d0 solid 3px;
  }
`;
export const ChatContainerOpen = styled.div`
  background-color: rgba(240, 248, 255);
  width: 20vw;
  height: 40vh;
  padding-top: 16px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  text-align: center;
  cursor: pointer;
  animation: grew 0.5s ease-out;
  outline: #aa01d0 solid 3px;

  @keyframes grew {
    from {
      height: 60px;
    }
    to {
      height: 40vh;
    }
  }
`;
export const ChatTitle = styled.span`
  color: black;
  font-size: 24px;
  font-weight: 700;
  margin-left: 4px;
`;
