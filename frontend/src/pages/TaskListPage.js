import React, { useEffect, useState } from 'react';
import TaskItem from '../components/TaskItem';
import AddButton from '../components/AddButton';
import { Link } from 'react-router-dom';

const TaskListPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const response = await fetch("/api/tasks/");
    const data = await response.json();
    setTasks(data);
  };

  return (
    <div className='task-list-page-container'>
      <div className='all'>
        <div className='task-list'>
          <h1>Tasks</h1>
          <div className="header">
            <h2 className='icon'>&#9782;</h2>
            <h2 className='counter'>Total tasks: {tasks.length}</h2>
          </div>
          {tasks.map((task, index) => (
            <TaskItem key={index} task={task} />
          ))}
        </div>
      </div>
      <Link to="/new-task" className="add-button-container">
        <AddButton />
      </Link>
    </div>
  );
}

export default TaskListPage;
