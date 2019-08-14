import styled from "styled-components/macro";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  min-height: 100vh;
`;

export { MainContainer };
