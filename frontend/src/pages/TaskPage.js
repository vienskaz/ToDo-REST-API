import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TaskPage = () => {
  let { id } = useParams();
  let [task, setTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getTask = async () => {
      if (id === "new") return;

      let response = await fetch(`/api/tasks/${id}/`);
      let data = await response.json();
      setTask(data);
    };
    if (id) {
      getTask();
    }
  }, [id]);

  let createTask = async () => {
    fetch(`/api/tasks/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
  }

  let updateTask = async () => {
    fetch(`/api/tasks/${id}/`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
  }

  let handleSubmit = () => {
    if (task && task.body === '') {
      handleDelete(); 
    } else {
      if (id !== 'new') {
        updateTask();
      } else {
        createTask();
      }
      navigate('/');
    }
  }

  let handleDelete = async () => {
    fetch(`/api/tasks/${id}/`, {
      method: "Delete",
      headers: {
        'Content-Type': 'application/json'
      },
    })
    navigate('/')
  }

  let handleChange = (value) => {
    setTask(task => ({ ...task, 'body': value }))
  }

  return (
    <div className='all-task-container'>

      {task ? (
        <>
          <div className='task-container'>
            <button onClick={handleSubmit}>Back</button>
            {id !== 'new' ? (
              <button onClick={handleDelete}>Delete</button>
            ) : (
              <button onClick={handleSubmit}>Done</button>
            )}
          </div>
          <div className='text-area-container'>
            <textarea onChange={(e) => handleChange(e.target.value)} value={task.body}></textarea>
          </div>
        </>
      ) : (
        <div>
          <div className='task-container'>
            <button onClick={handleSubmit}>Done</button>
          </div>
          <div className='text-area-container'>
            <textarea onChange={(e) => handleChange(e.target.value)} value={task?.body}></textarea>
          </div>
        </div>
      )}

    </div>
  );
};

export default TaskPage;
