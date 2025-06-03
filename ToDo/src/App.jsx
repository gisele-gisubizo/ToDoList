import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Display from './Components/Display';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} /> 
            <Route path='home' element={<Home />} /> 
            <Route path='display' element={<Display />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;