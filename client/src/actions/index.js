import axios from "axios";
import { FETCH_ALL_POSTS } from "./types";

const fetchAllPosts = () => async dispatch => {
  try {
    const { data } = await axios.get("/api/posts");
    console.log("response_data", data);
    return dispatch({
      type: FETCH_ALL_POSTS,
      data
    });
  } catch (error) {
    console.log("fetch all posts error", error);
  }
};

export { fetchAllPosts };
