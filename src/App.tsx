import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login/Page";
import Docent from "./docent/page";
import Student from "./student/page";
import ScheduleStudent from "./Schedule/Page/scheduleStudent";
import Schedule from "./Schedule/Page";
import StudentEnrollForm from "./student/Components/stundentEnroll/StudentEnrollForm ";
import Home from "./Home";
import Course from "./Course/Page";
import ScheduleDocent from "./Schedule/Page/ScheduleDocent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/home"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/horario"} element={<Schedule />} />
        <Route path="/docent" element={<Docent />} />
        <Route path="/student" element={<Student />} />
        <Route path="/horario-estudiante" element={<ScheduleStudent />} />
        <Route path="/horario-docente" element={<ScheduleDocent />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/matricular" element={<StudentEnrollForm />} />
        <Route path="/course" element={<Course />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
