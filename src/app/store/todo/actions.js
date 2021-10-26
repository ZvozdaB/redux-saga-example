const TODO_GET_LIST = 'TODO_GET_LIST';
const TODO_GET_RESPONSE = 'TODO_GET_RESPONSE';

const getList = () => {
  return {
    type: TODO_GET_LIST,
  };
};

const getListResponse = (data) => {
  return {
    type: TODO_GET_RESPONSE,
    payload: data,
  };
};

export const todoConsts = {
  TODO_GET_LIST,
  TODO_GET_RESPONSE,
};
export const todoActions = {
  getList,
  getListResponse,
};
