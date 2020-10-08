import {
  ADD_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
  FETCH_ITEMS,
} from "../constants/ChartConstants";

export const ChartReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case DELETE_ITEM:
      const newState = state.data.filter(({ source, target }) => {
        return !(
          source === action.payload.source && target === action.payload.target
        );
      });

      return { ...state.data, data: newState };

    case EDIT_ITEM:
      console.log(action.payload);
      const { source, target, amount } = action.payload;
      const EditedState = state.data.map((item) => {
        console.log(item);
        return item.source === source && item.target === target
          ? action.payload
          : item;
      });

      return { ...state, data: EditedState };

    case "UPDATE_ITEMS":
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export default ChartReducer;
