import React from 'react';

const Task = props => {
  return (
    <div className="task">
      <div className="task-header">
        <div>Task: {props.task.title}</div>
        <div className="task-body">Description: {props.task.description}</div>
        <br />
      </div>
    </div>
  );
   }

export default Task;
