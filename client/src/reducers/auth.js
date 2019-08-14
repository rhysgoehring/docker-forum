import { SIGN_IN, SIGN_UP } from "../actions/types";

const initialState = {
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: action.user
      };
    default:
      return {
        ...state
      };
  }
}
