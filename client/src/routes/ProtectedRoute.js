import React from "react";
// import { co}
import { Redirect, Route } from "react-router-dom";
import getToken from "../util/getToken";

const PrivateRoute = ({ component: Component, ...props }) => {
  const token = getToken();
  return (
    <Route
      {...props}
      render={innerProps =>
        token !== null ? <Component {...innerProps} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
