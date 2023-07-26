import React from 'react'

function Toys(props) {
  return (
    <div className='ticket'> 
      {/* <h1>Name: {props.tagInfo.child}</h1> */}
      <h2>Toy: {props.tagInfo.toyType.map((toy, i) =>{
        return <li key={i}>{toy}</li>
      })}</h2>
      <img src={props.tagInfo.image}/>
      <h3>Weight: {props.tagInfo.weight}</h3>
      <h3>Price: {props.tagInfo.price}</h3>
    

    {/* creating an unordered list */}
      



  


    </div>
  )
}

export default Toys