import React from 'react'
import '../Style/Home.css'
import { FaBars, FaList, FaCalendar, FaCalendarAlt } from 'react-icons/fa';
import { BsGrid } from 'react-icons/bs';
import {FaEdit, FaTrash } from 'react-icons/fa'; 

export const array=[{
  id:1,
  name:"learnreact",
  add:[<FaEdit style={{ color: 'blue', fontSize: '17px' }}/>],
  delete:[<FaTrash style={{ color: 'red', fontSize: '17px' }}/>]
},

{
  id:1,
  name:"learnreact",
  add:[<FaEdit key={1} style={{ color: 'blue', fontSize: '17px' }}/>],
  delete:[<FaTrash key={1} style={{ color: 'red', fontSize: '17px' }}/>]
},


{
  id:1,
  name:"learnreact",
  add:[<FaEdit key={1}  style={{ color: 'blue', fontSize: '17px' }}/>],
  delete:[<FaTrash key={1}  style={{ color: 'red', fontSize: '17px' }}/>]
},


{
  id:1,
  name:"learnreact",
  add:[<FaEdit  key={1} style={{ color: 'blue', fontSize: '17px' }}/>],
  delete:[<FaTrash  key={1} style={{ color: 'red', fontSize: '17px' }}/>]
},


{
  id:1,
  name:"learnreact",
  add:[<FaEdit key={1} style={{ color: 'blue', fontSize: '17px' }}/>],
  delete:[<FaTrash key={1}  style={{ color: 'red', fontSize: '17px' }}/>]
},


{
  id:1,
  name:"learnreact",
  add:[<FaEdit key={1}  style={{ color: 'blue', fontSize: '17px' }}/>],
  delete:[<FaTrash  key={1} style={{ color: 'red', fontSize: '17px' }}/>]
},


]

function Home() {
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
      
      <div className=''><input type="text" placeholder='Task' id="tasks"/></div>
      <div><button className='home-button'>Add task</button></div>
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