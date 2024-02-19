import React from 'react'
import { Link } from 'react-router-dom';
const TaskItem = ({task}) => {

  let getTitle = (task) => {

    let title = task.body.split('\n')[0]
    if (title.length > 45) {
        return title.slice(0, 45)
    }
    return title
}



  return (

    <div className='task-container'>
    <Link className='link' to={`/task/${task.id}`}>
          <h3>{getTitle(task)}</h3>
    </Link>
    </div>
  )
}

export default TaskItem
