import React, { useState } from 'react'
import './Todo.css'

const TodoList= ()=> {
    const [activity, setActivity] = useState("")
    const [listData, setlistdata] = useState([]);


const inputHandle=(e)=> {       
      setActivity(e.target.value);
     
    
}
const btnHandle=()=>{
    // setlistdata([...listData, activity])
    // console.log(listData)
    setlistdata((listData)=>{
        // if (activity.trim().length !== 0) {
        //     setActivity("");
        //   } else {
        //    alert('input value is empty');
        //   }
        const updatedList= [...listData, activity]
        return updatedList
    })
}
const removeHandle = (i)=>{
     const updatedListdata = listData.filter((elem, id)=>{
        return i!==id;
     })
     setlistdata(updatedListdata);
     console.log(updatedListdata);
}
  return (
    <>
    <div className="header-main">
         <h2 className='heading'>Todo App</h2>
         <input className='input' type='text' placeholder='Write Here' value={activity} onChange={inputHandle}/>
         <button onClick={btnHandle} className='input-btn'>Add</button>
         <p className='para-list'>Here is your list</p>
         {listData !== [] && listData.map((data,i)=>{
            return(
                <>
                <p key={i} className='paragraph-todo'>
                <div className='details-todo'>{data}</div>
                <div><button onClick={()=>removeHandle(i)} className='btn-todo'>remove</button></div>
                </p>
                </>
            )
         })}
    </div>

    </>
  )
}
export default TodoList;

