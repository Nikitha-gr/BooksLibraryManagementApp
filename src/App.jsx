import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MyBooksPage from './pages/MyBooksPage'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/mybookspage" element={<MyBooksPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
