import LanguageReducer from "../LanguageReducer.js";
import { UPDATE_LANG } from "../../constants/LanguageConstants";

test("Update language state", () => {
  const currentState = { lang: "English" };
  const payload = "Spanish";
  const ExpectedState = { lang: payload };
  expect(LanguageReducer(currentState, { type: UPDATE_LANG, payload })).toEqual(
    ExpectedState
  );
});
