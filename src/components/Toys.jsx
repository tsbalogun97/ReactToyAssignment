import React from 'react'

function Toys(props) {
  return (
    <div className='ticket'> 
      <h1>Name: {props.tagInfo.person}</h1>
      <h1>Toy: {props.tagInfo.toyType.map((toy) =>{
        return <li>{toy}</li>
      })}</h1>
      <h1>Price: {props.tagInfo.price}</h1>
    

    {/* creating an unordered list */}
      



  


    </div>
  )
}

export default Toys