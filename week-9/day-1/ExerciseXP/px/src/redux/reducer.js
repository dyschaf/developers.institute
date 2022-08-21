const initState = () => {
  counter: 0;
};
const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case "minus":
      return { ...state, count: action.payload };
      break;
    case minus:
      return { ...state, count: action.payload };

      break;

    default:
      break;
  }
  return { ...state };
};
export default reducer;
