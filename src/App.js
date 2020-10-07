import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import SankeyDiagram from "./components/SankeyDiagram";
import SankeyOperations from "./components/SanKeyOperations";
import Footer from "./components/Footer";
import { FetchItems } from "./actions/ChartActions";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

function App() {
  const ChartData = useSelector((state) => state.ChartData.data);

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
      <NavBar></NavBar>
      <SankeyDiagram {...SankeyProps}></SankeyDiagram>
      <MuiThemeProvider>
        <SankeyOperations />
      </MuiThemeProvider>
      <Footer>Centime Pvt Ltd</Footer>
    </React.Fragment>
  );
}

export default App;
