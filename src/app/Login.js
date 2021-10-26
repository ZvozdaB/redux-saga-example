import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from './store/auth/actions';
export const Login = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const submit = () => {
    console.log('email => ', email);
    dispatch(authActions.setEmail(email));
    setEmail('');
  };
  return (
    <div>
      введіть емейл ={' '}
      <input onChange={(event) => setEmail(event.target.value)} value={email} />
      <div onClick={submit}>зареєструватися</div>
    </div>
  );
};
