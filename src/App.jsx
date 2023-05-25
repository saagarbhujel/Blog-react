import SignUp from "./Components/auth/SignUp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/home/Home";
import Login from "./Components/auth/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
