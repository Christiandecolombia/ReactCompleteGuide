import React from 'react';

const person = (props) => {
    return (

        <div className='Person'>
            <p onClick={props.click}>I'm {props.name} and im {props.age} years old!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} ></input>
        </div>
    )


};

export default person;