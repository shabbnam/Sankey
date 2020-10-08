import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteItem } from "../../actions/ChartActions";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { FormattedMessage } from "react-intl";

function DeleteComponent() {
  var ChartData = useSelector((state) => state.ChartData.data);

  var sources = [...new Set(ChartData.map((item) => item.source))];
  var targets = [...new Set(ChartData.map((item) => item.target))];

  var dispatch = useDispatch();

  var [Node, setNode] = useState({ source: sources[0], target: targets[0] });

  const handleChange = (e) => {
    setNode({ ...Node, [e.target.name]: e.target.value });
  };

  const clickHandler = (e) => {
    console.log(Node.source);
    console.log(Node.target);
    dispatch(DeleteItem(Node));
  };

  return (
    <>
      <InputLabel htmlFor="source">
        <FormattedMessage id="source" defaultMessage="source" />
      </InputLabel>
      <Select
        style={{ marginBottom: "20px" }}
        fullWidth={true}
        native
        value={Node.source}
        name="source"
        onChange={handleChange}
      >
        {sources.map((source) => (
          <option value={source}>{source}</option>
        ))}
      </Select>

      <InputLabel htmlFor="target">
        {" "}
        <FormattedMessage id="target" defaultMessage="target" />
      </InputLabel>
      <Select
        fullWidth={true}
        native
        value={Node.target}
        name="target"
        onChange={handleChange}
        style={{ marginBottom: "20px" }}
      >
        {targets.map((target) => (
          <option value={target}>{target}</option>
        ))}
      </Select>

      <Button color="primary" variant="contained" onClick={clickHandler}>
        <FormattedMessage id="Delete" defaultMessage="DELETE" />
      </Button>
    </>
  );
}

export default DeleteComponent;
