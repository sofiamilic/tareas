import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tray from './components/tray';
import Course from './components/course';
import Ingredient from './components/ingredient';
import CoursesAll from './Platos';
import IngredientsAll from './Ingredientes';
import NewReview from './review';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/trays/:id_post" element={<Tray/>} />
        <Route path="/courses" element={<CoursesAll/>} />
        <Route path="/courses/:id_post" element={<Course/>} />
        <Route path="/ingredients" element={<IngredientsAll/>} />
        <Route path="/ingredients/:id_post" element={<Ingredient/>} />
        <Route path="/review" element={<NewReview/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
