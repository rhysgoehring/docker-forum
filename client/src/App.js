import React from "react";
import { Provider } from "react-redux";
import GlobalStyles from "./GlobalStyles";
import store from "./store";

import { Routes } from "./Routes";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Routes />
    </Provider>
  );
};

export default App;
