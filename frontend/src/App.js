import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import TaskListPage from './pages/TaskListPage';
import TaskPage from './pages/TaskPage';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/"   element={<TaskListPage />} />
        <Route path="/task/:id" element={<TaskPage />} />
      </Routes>
    </Router>
  );
}

export default App;
