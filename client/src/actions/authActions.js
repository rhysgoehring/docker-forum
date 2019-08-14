import axios from "axios";
import { SIGN_UP, SIGN_IN } from "./types";
import history from "../routes/history";

const signInUser = values => async dispatch => {
  try {
    const {
      data: { user, token }
    } = await axios.post("/api/users/signin", values);
    console.log("signIn user", user);
    console.log("signIn token", token);
    localStorage.setItem("forum-token", token);
    dispatch({
      type: SIGN_IN,
      user
    });
    history.push("/home");
  } catch (err) {
    console.log("redux signIn error", err);
  }
};

export { signInUser };
