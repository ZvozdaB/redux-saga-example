const TODO_GET_LIST = 'TODO_GET_LIST';
const TODO_GET_RESPONSE = 'TODO_GET_RESPONSE';
const TODO_GET_COMMENT = 'TODO_GET_COMMENT';
const TODO_GET_COMMENT_RESPONSE = 'TODO_GET_COMMENT_RESPONSE';

const getList = (id) => {
  return {
    type: TODO_GET_LIST,
    payload: {id}
  };
};
const getListResponse = (data) => {
  return {
    type: TODO_GET_RESPONSE,
    payload: data,
  };
};

const getComments = (id) => {
  return {
    type: TODO_GET_COMMENT,
    payload: { id }
  };
};
const getCommentResponse = (data) => {
  return {
    type: TODO_GET_COMMENT_RESPONSE,
    payload: data,
  };
};




export const todoConsts = {
  TODO_GET_LIST,
  TODO_GET_RESPONSE,
  TODO_GET_COMMENT_RESPONSE,
  TODO_GET_COMMENT,
};
export const todoActions = {
  getList,
  getListResponse,
  getCommentResponse,
  getComments,
};
