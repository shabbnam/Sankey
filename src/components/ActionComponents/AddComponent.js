import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { AddItem } from "../../actions/ChartActions";
import { FormattedMessage } from "react-intl";

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
        label={
          <FormattedMessage id="enter.source" defaultMessage="enter source" />
        }
        placeholder={
          <FormattedMessage id="enter.source" defaultMessage="enter source" />
        }
        onChange={HandleChange}
        name="source"
        value={Node.source}
        fullWidth={true}
      />
      <TextField
        type="text"
        label={
          <FormattedMessage id="enter.source" defaultMessage="enter source" />
        }
        placeholder={
          <FormattedMessage id="enter.source" defaultMessage="enter source" />
        }
        onChange={HandleChange}
        name="target"
        value={Node.target}
        fullWidth={true}
      />
      <TextField
        type="number"
        label={
          <FormattedMessage id="enter.amount" defaultMessage="enter amount" />
        }
        placeholder={
          <FormattedMessage id="enter.source" defaultMessage="enter source" />
        }
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
          <FormattedMessage id="Add" defaultMessage="Add" />
        </Button>
      </div>
    </>
  );
};

export default AddActionComponent;
