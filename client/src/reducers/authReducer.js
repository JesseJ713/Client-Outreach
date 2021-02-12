// accepting state and action of authentication as arguments
// returns next state of application
export default function (state = {}, action) {
  console.log(action);
  switch (action.type) {
    default:
      return state;
  }
}
