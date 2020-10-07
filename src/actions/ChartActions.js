import {
  ADD_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
  FETCH_ITEMS,
} from "../constants/ChartConstants";

import { data } from "../Api/data";

const AddItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
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
        dispatch({ type: "UPDATE_ITEMS", payload: data });
        resolve();
      }, 1000);
    });
  };
};

export { AddItem, EditItem, DeleteItem, FetchItems };
