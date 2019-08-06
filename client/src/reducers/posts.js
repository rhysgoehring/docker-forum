import { FETCH_ALL_POSTS } from "../actions/types";

const initialState = {
  posts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_POSTS:
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
}
