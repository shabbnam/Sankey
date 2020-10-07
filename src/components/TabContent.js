import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { EditItem, AddItem, DeleteItem } from "../actions/ChartActions";
import TextField from "@material-ui/core/TextField";

const content = (type) => {
  switch (type) {
    case "Add":
      return (
        <>
          <TextField  label="Enter node name " />
          <TextField type="number" label="Enter source" />

        </>
      );

    case "Edit":
      return {};
  }
};

function TabContent({ action }) {
  var ChartData = useSelector((state) => state.ChartData);
  console.log("chardata==>");
  console.log(ChartData);
  var sources = [...new Set(ChartData.map((item) => item.source))];
  var targets = [...new Set(ChartData.map((item) => item.target))];

  var dispatch = useDispatch();

  var [Node, setNode] = useState({ source: sources[0], target: targets[0] });

  const handleChange = (e, type) => {
    setNode((state) => {
      return {
        ...state,
        [e.target.name]: e.target.value,
      };
    });
  };

  const clickHandler = (e) => {
    dispatch(DeleteItem(Node));
  };

  return (
    <>
      <Select
        native
        value={Node.source}
        name="source"
        onChange={handleChange}
      ></Select>

      <Select native value={Node.target} name="target" onChange={handleChange}>
        {targets.map((target) => (
          <option value={target}>{target}</option>
        ))}
      </Select>
      {content(action)}

      <Button color="primary" variant="contained" onClick={clickHandler}>
        Delete
      </Button>
    </>
  );
}

export default TabContent;
