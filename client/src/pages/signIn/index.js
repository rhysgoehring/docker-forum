import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components/macro";
import { MainContainer } from "../../components/Layout";
import { PageTitle } from "../../components/Typography";
import AuthForm from "../../components/Forms/authForm";
import { signInUser } from "../../actions";

const AuthBox = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 60%;
`;

const SignIn = props => {
    return (
      <React.Fragment>
        <PageTitle>Login to the Forum</PageTitle>
        <MainContainer>
          <AuthBox>
            <AuthForm handleSubmit={values => props.signInUser(values)} />
          </AuthBox>
        </MainContainer>
      </React.Fragment>
    );
  }


export default connect(
  null,
  { signInUser }
)(SignIn);
