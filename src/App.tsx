import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login/Page";
import Docent from "./docent/page";
import Student from "./student/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path="/docent" element={<Docent />} />
        <Route path="/student" element={<Student />} />

        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
