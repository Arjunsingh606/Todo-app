import React, { useState } from 'react'

function UseSateobject() {

    const [name, setName] = useState({firstName:"", lastName:""})

  return (
    <>
      <div>
      <form>
      <input type='text' value={name.firstName} onChange={(e)=>{setName({...name,firstName:e.target.value})}}></input>
      <input type='text' value={name.lastName} onChange={(e)=>{setName({...name,lastName:e.target.value})}}></input>
      </form>
      {name.firstName}
      {name.lastName}
      {JSON.stringify(name)}

      </div>
    </>
  )
}

export default UseSateobject;
