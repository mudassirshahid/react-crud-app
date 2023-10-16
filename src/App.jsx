import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddCustomer from './components/AddCustomer'
import EditCustomer from './components/EditCustomer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/addcustomer' element={<AddCustomer />}></Route>
      <Route path='/editcustomer/:id' element={<EditCustomer />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
