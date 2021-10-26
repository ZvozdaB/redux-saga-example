const AUTH_SET_EMAIL = 'AUTH_SET_EMAIL';

const setEmail = (email) => {
  return {
    type: AUTH_SET_EMAIL,
    payload: { email },
  };
};

export const authConsts = {
  AUTH_SET_EMAIL,
};
export const authActions = {
  setEmail,
};
