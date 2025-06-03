import React from 'react'
import '../Style/Home.css'
import { useState } from 'react';
import { FaBars, FaList, FaCalendar, FaCalendarAlt } from 'react-icons/fa';
import { BsGrid } from 'react-icons/bs';
import {FaEdit, FaTrash } from 'react-icons/fa'; 

export const array=[{
   id: 1, name: "Deploy app to hosting platform", completed: "false" ,
  add:[<FaEdit style={{ color: 'blue', fontSize: '17px' }}/>],
  delete:[<FaTrash style={{ color: 'red', fontSize: '17px' }}/>]
},

{
    id: 2, name: "Write user documentation", completed: "false",
  add:[<FaEdit key={1} style={{ color: 'blue', fontSize: '17px' }}/>],
  delete:[<FaTrash key={1} style={{ color: 'red', fontSize: '17px' }}/>]
},


{
  id: 3, name: "Complete CSS styling for app", completed: "false",
  add:[<FaEdit key={1}  style={{ color: 'blue', fontSize: '17px' }}/>],
  delete:[<FaTrash key={1}  style={{ color: 'red', fontSize: '17px' }}/>]
},


{
  id: 4, name: "Learn React basics", completed: "false" ,
  add:[<FaEdit  key={1} style={{ color: 'blue', fontSize: '17px' }}/>],
  delete:[<FaTrash  key={1} style={{ color: 'red', fontSize: '17px' }}/>]
},


{
   id: 5, name: "clean my room", completed: "true" ,
  add:[<FaEdit key={1} style={{ color: 'blue', fontSize: '17px' }}/>],
  delete:[<FaTrash key={1}  style={{ color: 'red', fontSize: '17px' }}/>]
},


{
   id: 6, name: "talk to the client", completed: "true",
  add:[<FaEdit key={1}  style={{ color: 'blue', fontSize: '17px' }}/>],
  delete:[<FaTrash  key={1} style={{ color: 'red', fontSize: '17px' }}/>]
},


]



function Home() {
  const[tasks,setTasks]=useState(array);
  const[inputValue,setInputValue]=useState('');

  const handleAddTask=()=>{
    if(inputValue.trim()){
      const newTask={
        id:Date.now(),
        name:inputValue,
        add:[<FaEdit key={Date.now()} style={{color:'blue',fontSize:'17px'}}/>],
         delete:[<FaTrash key={Date.now()} style={{color:'red',fontSize:'17px'}}/>]

      }
    }
  };

const handleInputChange=(e)=>{
  setInputValue(e.target.value);

};

  return (
    <div className='home-container'>
      <div className='home-content'>
      <h1>Make a<span className='different'> better</span> plan <br /> for your Life</h1>
      <p>Whoever you are,Whatever you are looking for we <br />have the perfect place for you</p>
      <div className='Home-buttons'>
         <div className='home-dropdown'>
           <select>
          
                   <option value="Daily">Daily</option>
                   <option value="Weekly">Weekly</option>
                   <option value="Monthly">Monthly</option>
                   <option value="Yearly">Yearly</option>
                 </select>
         </div>
      
      <div className=''><input type="text" placeholder='Task' id="tasks" value={inputValue} onChange={handleInputChange}/></div>
      <div><button className='home-button' onClick={handleAddTask}>Add task</button></div>
      </div>
     
      </div>
       <div className='home-durations'>
         <div className='home-duration-buttons-all'><p><FaBars size="11px" color=" rgb(102, 155, 204)"/>All</p></div>
      <div className='home-duration-buttons'><p><FaList  size="11px" color=" rgb(178, 216, 243)"/>Daily</p></div>
       <div className='home-duration-buttons'><p><BsGrid  size="11px" color=" rgb(178, 216, 243)"/>weekly</p></div>
        <div className='home-duration-buttons'><p><FaCalendar  size="11px" color=" rgb(178, 216, 243)"/>Monthly</p></div>
         <div className='home-duration-buttons'><p><FaCalendarAlt  size="11px" color=" rgb(178, 216, 243)"/>Year</p></div>
      </div>





<div className='home-array'>
  {
    array.map((item)=>(

    <div className='home-array-list'>
     <div className='home-id'>{item.id}</div> 
<div>{item.name}</div>
<div className='home-editDelete'>
  <div className='home-add'>{item.add}</div>
  <div className='home-delete'>{item.delete}</div>
</div>

    </div>

    ))
  } 


</div>





      
    </div>
  )
}

export default Home