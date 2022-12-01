import MainPage from "../pages/MainPage";
import "../App.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./Theme.js";
import React from "react";
import CoursePage from "../pages/CoursePage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import EditSchedule from "../pages/EditSchedule";


function App() {
  return (
    <div className="fill-window">
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Router>

          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/1-year" element={<CoursePage navTitle="1-курс" />} />
            <Route path="/2-year" element={<CoursePage navTitle="2-курс" />} />
            <Route path="/3-year" element={<CoursePage navTitle="3-курс" />} />
            <Route path="/4-year" element={<CoursePage navTitle="4-курс" />} />
            <Route path="/1-year/:id" element={<EditSchedule />} />
          </Routes>

        </Router>
      </ThemeProvider>
    </React.StrictMode>
    </div>
  );
}

export default App;

