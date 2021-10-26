export const getList = async (abc) => {
  console.log('abc value => ', abc);
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const body = await response.json();
  return body;
};

export const todoServices = { getList };
