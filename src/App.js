import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import SankeyDiagram from "./components/SankeyDiagram";
import SankeyOperations from "./components/SanKeyOperations";
import Footer from "./components/Footer";
import { FetchItems } from "./actions/ChartActions";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Language from "./components/Language";
import { FormattedMessage } from "react-intl";
import Spanish from "./languages/es-MX.json";
import English from "./languages/en-US.json";
import { IntlProvider } from "react-intl";

function App() {
  const ChartData = useSelector((state) => state.ChartData.data);
  const local = useSelector((state) => state.lang.lang);
  let lang;
  local === "English" ? (lang = English) : (lang = Spanish);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchItems());
    return () => {};
  }, []);

  const SankeyProps = {
    id: "sankey",
    dataSource: ChartData,
    sourceField: "source",
    targetField: "target",
    weightField: "amount",
    title: "Company Turn Over for 2020 ",
  };

  return (
    <React.Fragment>
      {/* internationalization plugin provider */}
      <IntlProvider locale={local} messages={lang}>
        {/* NavBar */}
        <NavBar></NavBar>
        <Language />
        <SankeyDiagram {...SankeyProps}></SankeyDiagram> {/* Sankey diagram */}
        <MuiThemeProvider>
          {/* crud operations  */}
          <SankeyOperations />
        </MuiThemeProvider>
        {/*footer */}
        <Footer>
          <FormattedMessage
            id="Footer.footer"
            defaultMessage="Centime Pvt Ltd"
          />
        </Footer>
      </IntlProvider>
    </React.Fragment>
  );
}

export default App;
