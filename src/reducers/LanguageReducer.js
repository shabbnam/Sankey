function LanguageReducer(state = { lang: "English" }, action) {
  switch (action.type) {
    case "UPDATE_LANG":
      return {
        lang: action.payload,
      };

    default:
      return state;
  }
}
export default LanguageReducer;
