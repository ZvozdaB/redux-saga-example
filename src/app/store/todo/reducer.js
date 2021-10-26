import { todoConsts } from './actions';

const initialState = {
  loading: true,
  list: [],
  commentList: [{}],
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
        loading: true,
      };
    }
    case todoConsts.TODO_GET_COMMENT_RESPONSE: {
      return {
        ...state,
        commentList: action.payload,
      };
    }
    case todoConsts.TODO_GET_COMMENT: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
