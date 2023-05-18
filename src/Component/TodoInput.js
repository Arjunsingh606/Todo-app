import React, { useState } from 'react'

function TodoInput() {
    const [value, setValue] = useState(2);

    const inputHandle =(e)=>{
        setValue(e.target.value)
    }

    const changeHandle = ()=>{
        setValue(value + 1);
        console.log(value);
    }
    const changeHandle1=()=>{
      setValue(value - 1);
      console.log(value)
    }
  return (
    <>
      <div>
      <p>You clicked {value} times</p>
      {/* <input type='text' placeholder='write here' value={value} onChange={inputHandle}></input> */}
      <button onClick={changeHandle}>add on</button>
      <button onClick={changeHandle1}> decrement</button>
      </div>
    </>
  )
}
export default TodoInput;
