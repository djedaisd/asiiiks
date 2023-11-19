import React from 'react';

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Student from './pages/student';
import Addstudent from './pages/Addstudent';
function App() {
  return (
  <Router>
    <Routes>
      < Route exact path="/" Component={Student}/>
      < Route  path="/add-student" Component={Addstudent}/>

    </Routes>
  </Router>
  );
}

export default App;