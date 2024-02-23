import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Register from './Components/Register/Resgister';
import LoginSignup from './Pages/LoginSignup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <LoginSignup/>
    </div>
  );
}

export default App;
