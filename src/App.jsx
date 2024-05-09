import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Login from "./pages/login";
import AdminDashboard from "./pages/admin";

// Components
import Courses from "./components/primary-panels/courses";
import Batches from "./components/primary-panels/batches";
import Classes from "./components/primary-panels/classes";
import Students from "./components/primary-panels/students";
import Trainers from "./components/primary-panels/trainers";
import CourseDetails from "./components/secondary_panels/course_details";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <Router>
      <div className="app bg-texture-background bg-no-repeat bg-cover bg-center relative">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin/"
            element={
              <AdminDashboard
                sidebarState={isSidebarOpen}
                setSidebarState={setIsSidebarOpen}
              />
            }
          >
            <Route
              path="courses"
              element={<Courses setSidebarState={setIsSidebarOpen} />}
            />
            <Route
              path="batches"
              element={<Batches setSidebarState={setIsSidebarOpen} />}
            />
            <Route
              path="classes"
              element={<Classes setSidebarState={setIsSidebarOpen} />}
            />
            <Route
              path="students"
              element={<Students setSidebarState={setIsSidebarOpen} />}
            />
            <Route
              path="trainers"
              element={<Trainers setSidebarState={setIsSidebarOpen} />}
            />
            <Route
              path="courses/:courseTitle"
              element={<CourseDetails setSidebarState={setIsSidebarOpen} />}
            />
          </Route>

          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
