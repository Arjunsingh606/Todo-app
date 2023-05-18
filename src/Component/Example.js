import React, {useState} from 'react'


const Example = () => {
const [ internetActivity, setInternetActivity] = useState()

const ChangeHandle=()=>{

    }
  return (
    <>
    <div>
        <h1>that is from the example component </h1>
        <input type="text" placeholder='write some code here' value={internetActivity} onChange={ChangeHandle}></input>
    </div>
      
    </>
  )
}

export default Example;
