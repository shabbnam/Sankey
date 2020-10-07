import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { AddItem } from "../../actions/ChartActions";

const AddActionComponent = (props) => {
  var [Node, setNode] = useState({ source: "", target: "", amount: "" });

  var dispatch = useDispatch();

  const HandleChange = (e) => {
    console.log(e.target.value);
    setNode({ ...Node, [e.target.name]: e.target.value });
  };

  return (
    <>
      <TextField
        type="text"
        label="Enter Source"
        placeholder="enter source"
        onChange={HandleChange}
        name="source"
        value={Node.source}
        fullWidth={true}
      />
      <TextField
        type="text"
        label="Enter Target"
        placeholder="enter target"
        onChange={HandleChange}
        name="target"
        value={Node.target}
        fullWidth={true}
      />
      <TextField
        type="number"
        label="Enter Amount"
        placeholder="enter amount"
        onChange={HandleChange}
        name="amount"
        value={Node.amount}
        fullWidth={true}
      />
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <Button
          onClick={() => dispatch(AddItem(Node))}
          color="primary"
          variant="contained"
        >
          Add
        </Button>
      </div>
    </>
  );
};

export default AddActionComponent;
