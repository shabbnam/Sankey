import {
  ADD_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
  UPDATE_ITEMS,
} from "../constants/ChartConstants";

import { data } from "../Api/data";

const AddItem = (item) => {
  const newitem = { ...item, amount: parseInt(item.amount) };
  return {
    type: ADD_ITEM,
    payload: newitem,
  };
};

const EditItem = (amount) => {
  return {
    type: EDIT_ITEM,
    payload: amount,
  };
};

const DeleteItem = (item) => {
  return {
    type: DELETE_ITEM,
    payload: item,
  };
};

const FetchItems = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        dispatch({ type: UPDATE_ITEMS, payload: data });
        resolve();
      }, 1000);
    });
  };
};

export { AddItem, EditItem, DeleteItem, FetchItems };
