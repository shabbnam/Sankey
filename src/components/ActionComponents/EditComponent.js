import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import { EditItem } from "../../actions/ChartActions";
import { FormattedMessage } from "react-intl";

function EditComponent() {
  var ChartData = useSelector((state) => state.ChartData.data);
  var sources = [...new Set(ChartData.map((item) => item.source))];
  var targets = [...new Set(ChartData.map((item) => item.target))];
  var dispatch = useDispatch();
  var [Node, setNode] = useState({
    source: "",
    target: "",
    amount: 0,
  });

  useEffect(() => {
    let { amount } = getAmount(ChartData[0].source, ChartData[0].target);
    setNode({
      source: ChartData[0].source,
      target: ChartData[0].target,
      amount,
    });
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let item = null;

    switch (name) {
      case "source":
        item = getAmount(value, Node.target);
        setNode({
          ...Node,
          source: value,
          amount: item ? parseInt(item.amount) : 0,
        });
        break;

      case "target":
        item = getAmount(Node.source, value);
        setNode({
          ...Node,
          target: value,
          amount: item ? parseInt(item.amount) : 0,
        });
        break;

      case "amount":
        setNode({
          ...Node,
          amount: parseInt(value),
        });
        break;
    }
  };

  const getAmount = (source, target) =>
    ChartData.find((item) => item.source === source && item.target === target);

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
        <FormattedMessage id="target" defaultMessage="Target" />
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

      <TextField
        type="number"
        label={<FormattedMessage id="amount" defaultMessage="amount" />}
        placeholder={<FormattedMessage id="amount" defaultMessage="amount" />}
        onChange={handleChange}
        name="amount"
        value={Node.amount}
        fullWidth={true}
      />

      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <Button
          onClick={() => dispatch(EditItem(Node))}
          color="primary"
          variant="contained"
        >
          <FormattedMessage id="Edit" defaultMessage="EDIT" />
        </Button>
      </div>
    </>
  );
}

export default EditComponent;
