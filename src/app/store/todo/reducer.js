import { todoConsts } from './actions';

const initialState = {
  loading: true,
  list: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case todoConsts.TODO_GET_RESPONSE: {
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    }
    case todoConsts.TODO_GET_LIST: {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
