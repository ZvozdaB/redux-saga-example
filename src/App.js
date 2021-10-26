import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { Login } from './app/Login';
import { Home } from './app/Home';

function App() {
  const email = useSelector((state) => state.auth.email);
  console.log('email => ', email);
  const isUserLogin = !email?.length;
  if (isUserLogin) {
    return <Login />;
  }
  return <Home />;
}

export default App;
