import { UPDATE_LANG } from "../constants/LanguageConstants";
export const Update_Language = (selectedLang) => (dispatch) => {
  dispatch({ type: UPDATE_LANG, payload: selectedLang });
};
