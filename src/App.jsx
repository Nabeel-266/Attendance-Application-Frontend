import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import Login from "./pages/login";
import AdminDashboard from "./pages/admin";

// Import Components
import Courses from "./components/courses";
import Batches from "./components/batches";
import Classes from "./components/classes";
import Students from "./components/students";
import Trainers from "./components/trainers";

function App() {
  return (
    <Router>
      <div className="app bg-texture-background bg-no-repeat bg-cover bg-center relative">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/" element={<AdminDashboard />}>
            <Route path="courses" element={<Courses />} />
            <Route path="batches" element={<Batches />} />
            <Route path="classes" element={<Classes />} />
            <Route path="students" element={<Students />} />
            <Route path="trainers" element={<Trainers />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
