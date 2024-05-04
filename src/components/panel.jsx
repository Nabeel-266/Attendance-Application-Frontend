import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Header from "./header";
import Courses from "../screens/courses";
import Batches from "../screens/batches";
import Classes from "../screens/classes";
import Students from "../screens/students";
import Trainers from "../screens/trainers";
import CourseDetails from "./course_details";

const Panel = ({ setSidebarState }) => {
  return (
    <div className="w-full laptopRg:w-[77%] desktopSm:w-[80%] h-dvh overflow-hidden">
      <Header setSidebarState={setSidebarState} />

      <Routes>
        <Route path="courses" element={<Courses />} />
        <Route path="batches" element={<Batches />} />
        <Route path="classes" element={<Classes />} />
        <Route path="students" element={<Students />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="courses/:courseTiltle" element={<CourseDetails />} />
      </Routes>
    </div>
  );
};

export default Panel;
