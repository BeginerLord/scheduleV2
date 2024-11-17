import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login/Page";

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path={"/login"} element={<Login />} />
 
 <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
