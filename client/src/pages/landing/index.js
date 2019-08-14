import React from "react";
import { MainContainer } from "../../components/Layout";
import { PageTitle } from "../../components/Typography";
import { LinkButton } from "../../components/Buttons";
import ButtonBox from "./styles";

const LandingPage = () => (
  <MainContainer>
    <PageTitle>Welcome to The Forum</PageTitle>
    <ButtonBox>
      <LinkButton to="/signup" buttonColor="blue" textColor="white">
        Sign Up
      </LinkButton>
      <LinkButton to="/signin">Sign In</LinkButton>
    </ButtonBox>
  </MainContainer>
);

export default LandingPage;
