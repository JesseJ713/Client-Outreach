import { FETCH_USER } from "../actions/types";

// accepting state and action of authentication as arguments
// returns next state of application
export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
