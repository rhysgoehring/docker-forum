import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const LinkButton = styled(Link)`
  background-color: ${({ buttonColor }) => buttonColor || "green"};
  color: ${({ textColor }) => textColor || "white"};
  font-size: 2rem;
  border-radius: 1rem;
  text-decoration: none;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ buttonColor }) => buttonColor};
  padding: 1.5rem 3rem;
  text-align: center;

  &:focus {
    outline: none;
  }
`;

export { LinkButton };
