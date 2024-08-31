import styled from "styled-components";

export const RightMenuContainer = styled.aside`
  position: fixed;
  display: flex;
  right: 0;
  z-index: 1;
  height: 100vh;
  width: 20vw;
  padding: 0px 32px;
`;
export const RightMenuTop = styled.div`
  width: 100%;
`;

export const RightMenuOthersContacts = styled.div`
  display: flex;
  width: 100%;
  border-radius: 12px;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.8);
  transition: background-color 0.3s linear;

  &:hover {
    background-color: rgba(255, 255, 255);
    outline: 2px solid #aa01d0;
  }
`;
export const RightMenuOthersContactsText = styled.span`
  margin: 16px;
  font-size: 16px;
  font-weight: 600;
  color: black;
`;
export const ContactCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid gray;
  justify-content: start;
  align-items: center;
  padding: 8px;
`;
export const ContactCardContainerText = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
export const ContactCardTitle = styled.span`
  color: black;
  font-size: 16px;
  font-weight: 600;
`;
export const ContactCardSubtitle = styled.span`
  padding-top: 2px;
  color: gray;
  font-size: 14px;
  font-weight: 600;
`;
export const ContactCardButton = styled.button`
  background-color: #aa01d0;
  border-radius: 9999px;
  height: 30px;
  font-size: 10px;
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
