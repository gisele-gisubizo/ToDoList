import React, { useState } from 'react';
import '../Style/Home.css';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaList, FaCalendar, FaCalendarAlt } from 'react-icons/fa';
import { BsGrid } from 'react-icons/bs';
import { FaEdit, FaTrash } from 'react-icons/fa';

export const array = [
  { id: 1, name: "Deploy app to hosting platform", completed: "false", add: [<FaEdit key={1} style={{ color: 'blue', fontSize: '17px' }} />], delete: [<FaTrash key={1} style={{ color: 'red', fontSize: '17px' }} />] },
  { id: 2, name: "Write user documentation", completed: "false", add: [<FaEdit key={2} style={{ color: 'blue', fontSize: '17px' }} />], delete: [<FaTrash key={2} style={{ color: 'red', fontSize: '17px' }} />] },
  { id: 3, name: "Complete CSS styling for app", completed: "false", add: [<FaEdit key={3} style={{ color: 'blue', fontSize: '17px' }} />], delete: [<FaTrash key={3} style={{ color: 'red', fontSize: '17px' }} />] },
  { id: 4, name: "Learn React basics", completed: "false", add: [<FaEdit key={4} style={{ color: 'blue', fontSize: '17px' }} />], delete: [<FaTrash key={4} style={{ color: 'red', fontSize: '17px' }} />] },
  { id: 5, name: "clean my room", completed: "true", add: [<FaEdit key={5} style={{ color: 'blue', fontSize: '17px' }} />], delete: [<FaTrash key={5} style={{ color: 'red', fontSize: '17px' }} />] },
  { id: 6, name: "talk to the client", completed: "true", add: [<FaEdit key={6} style={{ color: 'blue', fontSize: '17px' }} />], delete: [<FaTrash key={6} style={{ color: 'red', fontSize: '17px' }} />] },
];

function Home() {
  const [tasks, setTasks] = useState(array);
  const [inputValue, setInputValue] = useState('');
  const [editTaskId, setEditTaskId] = useState(null); 
  const [editValue, setEditValue] = useState('');
  const navigate = useNavigate();

 
  const getNextId = () => {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
  };

  const handleAddTask = () => {
    if (inputValue.trim()) {
      const newTask = {
        id: getNextId(),
        name: inputValue,
        completed: "false",
        add: [<FaEdit key={getNextId()} style={{ color: 'blue', fontSize: '17px' }} />], 
        delete: [<FaTrash key={getNextId()} style={{ color: 'red', fontSize: '17px' }} />], 
      };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      array.push(newTask);
      setInputValue('');
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

 
  const handleEdit = (taskId, taskName) => {
    setEditTaskId(taskId);
    setEditValue(taskName);
  };

  const handleSaveEdit = (taskId) => {
    if (editValue.trim()) {
      const updatedTasks = tasks.map(task =>
        task.id === taskId ? { ...task, name: editValue } : task
      );
      setTasks(updatedTasks);
      array.length = 0; 
      array.push(...updatedTasks);
      setEditTaskId(null);
      setEditValue('');
    }
  };

  
  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    array.length = 0; 
    array.push(...updatedTasks);
  };

  const goToDisplay = () => {
    navigate('/display');
  };

  return (
    <div className='home-container'>
      <div className='home-content'>
        <h1>Make a <span className='different'>better</span> plan <br /> for your Life</h1>
        <p>Whoever you are, Whatever you are looking for we <br />have the perfect place for you</p>
        <div className='Home-buttons'>
          <div className='home-dropdown'>
            <select>
              <option value=""> Duration</option>
              <option value="Weekly">Before noon</option>
              <option value="Monthly">After noon</option>
              <option value="Yearly">Midnight</option>
            </select>
          </div>
          <div><input type="text" placeholder='Task' id="tasks" value={inputValue} onChange={handleInputChange} /></div>
          <div><button className='home-button' onClick={handleAddTask}>Add task</button></div>
        </div>
      </div>
      <div className='home-durations'>
        <div className='home-duration-buttons-all'><p><FaBars size="11px" color="rgb(102, 155, 204)" />All</p></div>
        <div className='home-duration-buttons'><p><FaList size="11px" color="rgb(178, 216, 243)" />Daily</p></div>
        <div className='home-duration-buttons'><p><BsGrid size="11px" color="rgb(178, 216, 243)" />weekly</p></div>
        <div className='home-duration-buttons'><p><FaCalendar size="11px" color="rgb(178, 216, 243)" />Monthly</p></div>
        <div className='home-duration-buttons'><p><FaCalendarAlt size="11px" color="rgb(178, 216, 243)" />Year</p></div>
      </div>
      <div className='home-array'>
        {tasks.map((item) => (
          <div key={item.id} className='home-array-list'>
            <div className='home-id'>{item.id}</div>
            <div>
              {editTaskId === item.id ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onBlur={() => handleSaveEdit(item.id)}
                  autoFocus
                />
              ) : (
                item.name
              )}
            </div>
            <div className='home-editDelete'>
              <div className='home-add' onClick={() => handleEdit(item.id, item.name)}>{item.add}</div>
              <div className='home-delete' onClick={() => handleDelete(item.id)}>{item.delete}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="navigate-button-container">
        <button className="navigate-button" onClick={goToDisplay}>Go to Displayed Tasks</button>
      </div>
    </div>
  );
}

export default Home;