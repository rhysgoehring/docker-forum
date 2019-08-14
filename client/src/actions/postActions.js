import axios from "axios";
import { FETCH_ALL_POSTS } from "./types";
import history from "../routes/history";

const fetchAllPosts = () => async dispatch => {
  try {
    const { data } = await axios.get("/api/posts");
    dispatch({
      type: FETCH_ALL_POSTS,
      data
    });
    return data;
  } catch (error) {
    console.log("fetch all posts error", error);
  }
};

export { fetchAllPosts };
