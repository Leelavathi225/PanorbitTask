// import logo from './logo.svg';
import './components/App.css';
import './components/Header.css';
import Index from './components/Index';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./components/Profile"

import Posts from "./components/Posts"
import ToDo from "./components/ToDo"
import Gallery from "./components/Gallery"
function App() {
  return (
    
    <BrowserRouter>
     <Routes>
     <Route path='/' element={<Index />} />
      
     <Route path='/homePage/:id' element={<Profile />} />
     <Route path='/gallery' element={<Gallery />} />
     <Route path='/posts' element={<Posts />} />
     <Route path='/todo' element={<ToDo />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;