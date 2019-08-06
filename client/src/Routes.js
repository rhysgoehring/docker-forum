import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  __RouterContext
} from "react-router-dom";
import { useTransition, animated } from "react-spring";

import Home from "./pages/home";
import CreatePost from "./pages/createPost";

const useRouter = () => {
  return useContext(__RouterContext);
};

const AnimatedRoutes = () => {
  const { location } = useRouter();

  const transitions = useTransition(location, locations => locations.key, {
    from: {
      opacity: 0,
      position: "absolute",
      width: "100%",
      transform: "translate3d(100%, 0, 0)"
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)"
    },
    leave: { opacity: 0, transform: "translate3d(-50%, 0, 0)" }
  });

  return transitions.map(({ item, props: transitonStyle, key }) => (
    <animated.div key={key} style={transitonStyle}>
      <Switch location={item}>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts/new" component={CreatePost} />
      </Switch>
    </animated.div>
  ));
};

const Routes = ({ children }) => {
  return (
    <Router>
      <AnimatedRoutes />
      {children}
    </Router>
  );
};

export { Routes };
