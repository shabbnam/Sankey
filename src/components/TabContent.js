import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { EditItem, AddItem, DeleteItem } from "../actions/ChartActions";
import TextField from "@material-ui/core/TextField";
import AddComponent from "./ActionComponents/AddComponent";
import EditComponent from "./ActionComponents/EditComponent";
import DeleteComponent from "./ActionComponents/DeleteComponent";

function TabContent({ action }) {
  var ChartData = useSelector((state) => state.ChartData.data);

  console.log(ChartData);
  var sources = [...new Set(ChartData.map((item) => item.source))];
  var targets = [...new Set(ChartData.map((item) => item.target))];
  var [Node, setNode] = useState({ source: "", target: "", amount: "" });

  var dispatch = useDispatch();

  return action === "Add" ? (
    <AddComponent />
  ) : action === "Edit" ? (
    <EditComponent />
  ) : (
    <DeleteComponent />
  );
}

export default TabContent;
