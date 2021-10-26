import { authConsts } from './actions';

const initialState = {
  email: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConsts.AUTH_SET_EMAIL: {
      return {
        ...state,
        email: action.payload.email,
      };
    }
    default: {
      return state;
    }
  }
};
