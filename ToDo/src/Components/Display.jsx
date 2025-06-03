import React, { useState, useEffect } from 'react';
import '../Style/display.css';
import { array } from './Home';

function Display() {
  const [tasks, setTasks] = useState(array);

  useEffect(() => {
    setTasks([...array]);
  }, [array]);

  return (
    <div className="display-container">
      <h1 className="display-title">Display all Tasks</h1>
      <table className="display-table">
        <thead>
          <tr className="display-table-header-row">
            <th className="display-table-header">ID</th>
            <th className="display-table-header">Task Name</th>
            <th className="display-table-header">Completed</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id} className="display-table-row">
              <td className="display-table-cell">{task.id}</td>
              <td className={`display-table-cell completed-${task.completed}`}>{task.name}</td>
              <td className="display-table-cell">{task.completed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Display;