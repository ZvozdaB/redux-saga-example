
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { Login } from './app/Login';
import { Home } from './app/Home';
import { authActions } from "./app/store/auth/actions"


function App() {
  const email = useSelector((state) => state.auth.email);
  const dispatch = useDispatch()
  const isUserLogin = !email?.length;
  if (isUserLogin){
    let localEmail = localStorage.getItem("email");
    localEmail && dispatch(authActions.setEmail(localEmail));
  }
  if (isUserLogin) {
    return <Login />;
  }
  return <Home />;
}

export default App;
