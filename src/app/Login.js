import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from './store/auth/actions';
export const Login = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const submit = (evt) => {
    evt.preventDefault();
    console.log('email => ', email);
    dispatch(authActions.setEmail(email));
    setEmail('');
  };
  return (
    <form className="form__box" onSubmit={submit}>
      <p>Зарегіструватися</p>
      <input onChange={(event) => setEmail(event.target.value)} value={email} id="email" placeholder="Введіть Email"/>
      <button type="submit" >Увійти</button>
    </form>
  );
};
