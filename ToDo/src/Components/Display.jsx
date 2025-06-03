import React from 'react';
import '../Style/display.css';
import { array } from './Home';
import { useState,useEffect } from 'react';


// export const tasks = [
//   { id: 1, name: "Deploy app to hosting platform", completed: "false" },
//   { id: 2, name: "Write user documentation", completed: "false" },
//   { id: 3, name: "Complete CSS styling for app", completed: "false" },
//   { id: 4, name: "Learn React basics", completed: "false" },
//   { id: 5, name: "clean my room", completed: "true" },
//   { id: 6, name: "talk to the client", completed: "true" },
//   { id: 7, name: "Go to the gym", completed: "true" },
//   { id: 8, name: "Go to musanze with friends", completed: "true" },
// ];

function Display() {
    const [tasks,setTasks]=useState(array);

    useEffect(()=>{
        setTasks([...array]);
    },[array])
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