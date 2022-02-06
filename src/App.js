import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Book from './Components/Book/Book';
import Header from './Components/Header/Header';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/bookNow" element={<Book/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
