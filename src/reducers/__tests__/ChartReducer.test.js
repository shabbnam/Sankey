import ChartReducer from "../ChartReducer.js";
import { ADD_ITEM, EDIT_ITEM } from "../../constants/ChartConstants";

test("Update State properly current data is undefined", () => {
  const currentState = undefined;
  const payload = [
    { source: "US-Projects2", target: "Centime", amount: 560000 },
  ];
  const ExpectedState = { data: payload };
  const action = { type: "UPDATE_ITEMS", payload };
  expect(ChartReducer(currentState, action)).toEqual(ExpectedState);
});

test("Update State properly when we have some data", () => {
  const currentState = {
    data: [{ source: "US-Projects2", target: "Centime", amount: 560000 }],
  };
  const payload = [
    { source: "US-Projects3", target: "Centime", amount: 400000 },
  ];
  const ExpectedState = { data: payload };
  const action = { type: "UPDATE_ITEMS", payload };
  expect(ChartReducer(currentState, action)).toEqual(ExpectedState);
});

test("Add Item to state ", () => {
  const currentState = {
    data: [{ source: "US-Projects2", target: "Centime", amount: 560000 }],
  };

  const payload = { source: "US-Projects3", target: "Centime", amount: 650000 };
  const ExpectedState = {
    data: [
      { source: "US-Projects2", target: "Centime", amount: 560000 },
      { source: "US-Projects3", target: "Centime", amount: 650000 },
    ],
  };
  const action = { type: ADD_ITEM, payload };
  expect(ChartReducer(currentState, action)).toEqual(ExpectedState);
});

test("Edit Item  ", () => {
  const currentState = {
    data: [
      { source: "US-Projects1", target: "Centime1", amount: 560000 },
      { source: "US-Projects2", target: "Centime2", amount: 56000 },
    ],
  };

  const payload = {
    source: "US-Projects1",
    target: "Centime1",
    amount: 890000,
  };
  const ExpectedState = {
    data: [
      { source: "US-Projects1", target: "Centime1", amount: 890000 },
      { source: "US-Projects2", target: "Centime2", amount: 56000 },
    ],
  };
  const action = { type: EDIT_ITEM, payload };
  expect(ChartReducer(currentState, action)).toEqual(ExpectedState);
});
