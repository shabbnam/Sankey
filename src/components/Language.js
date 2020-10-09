import React, { useState, useEffect } from "react";
import Select from "@material-ui/core/Select";
import { useDispatch, useSelector } from "react-redux";
import { Update_Language } from "../actions/LanguageActions";
import InputLabel from "@material-ui/core/InputLabel";
import { FormattedMessage } from "react-intl";

function Language() {
  const languagesSupported = ["English", "Spanish"];

  const [SelectedLang, setSelectedLang] = useState(
    useSelector((state) => state.lang.lang)
  );
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedLang(value);
  };

  useEffect(() => {
    dispatch(Update_Language(SelectedLang));
  }, [SelectedLang]);

  return (
    <div style={{ paddingLeft: "93%" }}>
      <InputLabel htmlFor="source"><FormattedMessage id="Language" defaultMessage="Language"/></InputLabel>
      <Select
        style={{ marginBottom: "20px" }}
        native
        value={SelectedLang}
        name="language"
        onChange={handleChange}
      >
        {languagesSupported.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </Select>
    </div>
  );
}

export default Language;
