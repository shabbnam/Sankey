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
      const newState = state.filter(({ source, target }) => {
        return !(
          source === action.payload.source && target === action.payload.target
        );
      });

      return [...newState];

    case EDIT_ITEM:
      console.log(action.payload);
      return {
        ...state,
        data: state.data.filter((item) => item !== action.payload),
      };

    case "UPDATE_ITEMS":
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export default ChartReducer;
