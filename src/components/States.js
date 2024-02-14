import React from 'react'

const States = ({states}) => {
   
  return (
    <div>
        {states.map((states)=>(
            <div className='bg-warning'>
        <h1 className='bg-warning'>{states.name}</h1>
        <h5 className='bg-success'>{states.language}</h5>
        </div>
))};
    </div>
  );
};

export default States