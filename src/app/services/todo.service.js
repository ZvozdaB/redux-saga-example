export const getList = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const body = await response.json();
  return body;
};
export const getComments = async ({payload}) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${payload.id}/comments`);
  const body = await response.json();
  return body;
};

export const todoServices = { getList, getComments };
