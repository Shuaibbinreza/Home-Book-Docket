import { useState } from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddUser from './books/AddBook';
import EditUser from './books/EditBook';
import ViewUser from './books/ViewBook';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <h1>Home Page</h1>
        <Router>
          <Navbar/> 
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/adduser" element={<AddUser/>}/>
            <Route exact path="/edituser/:id" element={<EditUser/>}/>
            <Route exact path="/viewuser/:id" element={<ViewUser/>}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
