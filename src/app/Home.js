import React, {  useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Posts } from './Posts/Posts';
import { todoActions } from './store/todo/actions';


export const Home = () => {
  const dispatch = useDispatch();
  const { email, isToDoLoading,  } = useSelector((state) => {
    return {
      email: state.auth.email,
      isToDoLoading: state.todo.loading,
    };
  });

  useEffect(() => {
    dispatch(todoActions.getList());
  }, []);

  return (
    <div>
      <div className='header'>
        <div></div>
        {email}
      </div>

      {isToDoLoading && 'Ще не загрузилися'}
      {!isToDoLoading && <Posts/>}
    </div>
  );
};
