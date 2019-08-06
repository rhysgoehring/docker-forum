import React from "react";
import { Link } from "react-router-dom";
import { MainContainer } from "../../components/Layout";

const CreatePost = () => {
  return (
    <MainContainer>
      <h1>Create Post Page</h1>
      <Link to="/">Home</Link>
    </MainContainer>
  );
};

export default CreatePost;
