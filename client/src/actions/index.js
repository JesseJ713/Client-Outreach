import axios from "axios";
import { FETCH_USER } from "./types";
import { FETCH_SURVEYS } from "./types";

// returning function
// redux thunk will see function and call with a dispatch
// waiting until response from api to complete dispatch
export const fetchUser = () => {
  return function (dispatch) {
    axios
      .get("/api/current_user")
      .then((res) => dispatch({ type: FETCH_USER, payload: res.data }));
  };
};

export const handleToken = (token) => {
  return function (dispatch) {
    axios
      .post("/api/stripe", token)
      .then((res) => dispatch({ type: FETCH_USER, payload: res.data }));
  };
};

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/surveys", values);

  history.push("/surveys");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
