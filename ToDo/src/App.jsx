import { useState } from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
import Login from './Components/Login'
import SignUp from './Components/SignUp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/login'  index element={<Login/>}/>
      <Route path='/signup'  index element={<SignUp/>}/>
<Route path='/' element={<Layout/>}>
<Route path='/Home'  index element={<Home/>}/>



</Route>


      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
