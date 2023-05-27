import SignUp from "./Components/auth/SignUp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/home/Home";
import Login from "./Components/auth/Login";

import About from "./Components/navbar/About";
import Contact from "./Components/navbar/Contact";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
