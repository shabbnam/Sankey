import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
      <input
        type="text"
        value={Node.source}
        placeholder="enter source"
        name="source"
        onChange={HandleChange}
      ></input>
      <input
        type="text"
        value={Node.target}
        placeholder="enter source"
        name="target"
        onChange={HandleChange}
      ></input>
      <input
        type="number"
        value={Node.amount}
        placeholder="enter amount"
        name="amount"
        onChange={HandleChange}
      ></input>

      <button onClick={() => dispatch(AddItem(Node))}>Add</button>
    </>
  );
};

export default AddActionComponent;
