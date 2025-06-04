import React, { useState } from 'react';
import '../Style/Home.css';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaList, FaCalendar, FaCalendarAlt } from 'react-icons/fa';
import { BsGrid } from 'react-icons/bs';
import { FaEdit, FaTrash } from 'react-icons/fa';

export const array = [
  { id: 1, name: "Deploy app to hosting platform", completed: "false", duration: "Before Noon", frequency: "Weekly", add: [<FaEdit key={1} style={{ color: 'blue', fontSize: '17px' }} />], delete: [<FaTrash key={1} style={{ color: 'red', fontSize: '17px' }} />] },
  { id: 2, name: "Write user documentation", completed: "false", duration: "Afternoon", frequency: "Monthly", add: [<FaEdit key={2} style={{ color: 'blue', fontSize: '17px' }} />], delete: [<FaTrash key={2} style={{ color: 'red', fontSize: '17px' }} />] },
  { id: 3, name: "Complete CSS styling for app", completed: "false", duration: "Midnight", frequency: "Yearly", add: [<FaEdit key={3} style={{ color: 'blue', fontSize: '17px' }} />], delete: [<FaTrash key={3} style={{ color: 'red', fontSize: '17px' }} />] },
  { id: 4, name: "Learn React basics", completed: "false", duration: "Before Noon", frequency: "Weekly", add: [<FaEdit key={4} style={{ color: 'blue', fontSize: '17px' }} />], delete: [<FaTrash key={4} style={{ color: 'red', fontSize: '17px' }} />] },
  { id: 5, name: "clean my room", completed: "true", duration: "Afternoon", frequency: "Monthly", add: [<FaEdit key={5} style={{ color: 'blue', fontSize: '17px' }} />], delete: [<FaTrash key={5} style={{ color: 'red', fontSize: '17px' }} />] },
  { id: 6, name: "talk to the client", completed: "true", duration: "Midnight", frequency: "Yearly", add: [<FaEdit key={6} style={{ color: 'blue', fontSize: "17px" }} />], delete: [<FaTrash key={6} style={{ color: 'red', fontSize: '17px' }} />] },
];

function Home() {
  const [tasks, setTasks] = useState(array);
  const [inputValue, setInputValue] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('Before Noon'); // Default duration for new tasks
  const [selectedFrequency, setSelectedFrequency] = useState('Weekly'); // Default frequency for new tasks
  const [filterDuration, setFilterDuration] = useState('All'); // Filter state for duration
  const [filterFrequency, setFilterFrequency] = useState('All'); // Filter state for frequency
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
        duration: selectedDuration,
        frequency: selectedFrequency,
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


  const handleEdit = (taskId, taskName, taskDuration, taskFrequency) => {
    setEditTaskId(taskId);
    setEditValue(taskName);
    setSelectedDuration(taskDuration);
    setSelectedFrequency(taskFrequency);
  };

  const handleSaveEdit = (taskId) => {
    if (editValue.trim()) {
      const updatedTasks = tasks.map(task =>
        task.id === taskId ? { ...task, name: editValue, duration: selectedDuration, frequency: selectedFrequency } : task
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


  const handleFrequencyFilter = (frequency) => {
    setFilterFrequency(frequency);
  };


  const handleDurationFilter = (duration) => {
    setFilterDuration(duration);
  };


  const filteredTasks = tasks.filter(task =>
    (filterDuration === 'All' || task.duration === filterDuration) &&
    (filterFrequency === 'All' || task.frequency === filterFrequency)
  );

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
            <label htmlFor="duration">Duration:</label>
            <select id="duration" value={selectedDuration} onChange={(e) => setSelectedDuration(e.target.value)}>
              <option value="Before Noon">Before Noon</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Midnight">Midnight</option>
            </select>
          </div>
          <div className='home-dropdown'>
            <label htmlFor="frequency">Frequency:</label>
            <select id="frequency" value={selectedFrequency} onChange={(e) => setSelectedFrequency(e.target.value)}>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
          <div><input type="text" placeholder='Task' id="tasks" value={inputValue} onChange={handleInputChange} /></div>
          <div><button className='home-button' onClick={handleAddTask}>Add task</button></div>
        </div>
      </div>
      <div className='home-durations'>
        <div className={`home-duration-buttons-all ${filterDuration === 'All' ? 'active' : ''}`} onClick={() => handleDurationFilter('All')}>
          <p><FaBars size="11px" color="rgb(102, 155, 204)" />All</p>
        </div>
        <div className={`home-duration-buttons ${filterDuration === 'Before Noon' ? 'active' : ''}`} onClick={() => handleDurationFilter('Before Noon')}>
          <p><FaList size="11px" color="rgb(178, 216, 243)" />Before Noon</p>
        </div>
        <div className={`home-duration-buttons ${filterDuration === 'Afternoon' ? 'active' : ''}`} onClick={() => handleDurationFilter('Afternoon')}>
          <p><BsGrid size="11px" color="rgb(178, 216, 243)" />Afternoon</p>
        </div>
        <div className={`home-duration-buttons ${filterDuration === 'Midnight' ? 'active' : ''}`} onClick={() => handleDurationFilter('Midnight')}>
          <p><FaCalendar size="11px" color="rgb(178, 216, 243)" />Midnight</p>
        </div>
      </div>
      <div className='home-frequencies'>
        <div className={`home-frequency-buttons ${filterFrequency === 'All' ? 'active' : ''}`} onClick={() => handleFrequencyFilter('All')}>
          <p><FaBars size="11px" color="rgb(102, 155, 204)" />All</p>
        </div>
        <div className={`home-frequency-buttons ${filterFrequency === 'Weekly' ? 'active' : ''}`} onClick={() => handleFrequencyFilter('Weekly')}>
          <p><BsGrid size="11px" color="rgb(178, 216, 243)" />Weekly</p>
        </div>
        <div className={`home-frequency-buttons ${filterFrequency === 'Monthly' ? 'active' : ''}`} onClick={() => handleFrequencyFilter('Monthly')}>
          <p><FaCalendar size="11px" color="rgb(178, 216, 243)" />Monthly</p>
        </div>
        <div className={`home-frequency-buttons ${filterFrequency === 'Yearly' ? 'active' : ''}`} onClick={() => handleFrequencyFilter('Yearly')}>
          <p><FaCalendarAlt size="11px" color="rgb(178, 216, 243)" />Yearly</p>
        </div>
      </div>
      <div className='home-array'>
        {filteredTasks.map((item) => (
          <div key={item.id} className='home-array-list'>
            <div className='home-id'>{item.id}</div>
            <div>
              {editTaskId === item.id ? (
                <div className='edit-container'>
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={() => handleSaveEdit(item.id)}
                    autoFocus
                  />
                  <select value={selectedDuration} onChange={(e) => setSelectedDuration(e.target.value)}>
                    <option value="Before Noon">Before Noon</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Midnight">Midnight</option>
                  </select>
                  <select value={selectedFrequency} onChange={(e) => setSelectedFrequency(e.target.value)}>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                  </select>
                </div>
              ) : (
                item.name
              )}
            </div>
            <div className='home-duration'>{item.duration}</div>
            <div className='home-frequency'>{item.frequency}</div>
            <div className='home-editDelete'>
              <div className='home-add' onClick={() => handleEdit(item.id, item.name, item.duration, item.frequency)}>{item.add}</div>
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