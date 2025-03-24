import styled from "styled-components";

export const Step = styled.div<{ isActive: boolean }>`
  width: 12px;
  height: 12px;
  margin: 0px 4px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? "#ae0bd3" : "#ccc")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

export const StepsContainer = styled.div`
  margin: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
