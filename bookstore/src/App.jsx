import './App.css'
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import ShowBooks from './pages/ShowBooks';
import CreateBooks from './pages/CreateBooks';
import UpdateBooks from './pages/UpdateBooks';
import DeleteBooks from './pages/DeleteBooks';


function App() {


  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/details/:id" element={<ShowBooks />} />
      <Route path="/books/update/:id" element={<UpdateBooks />} />
      <Route path="/books/delete/:id" element={<DeleteBooks />} />

    </Routes>
  )
}

export default App
