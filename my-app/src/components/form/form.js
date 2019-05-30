import React from 'react';

const Form = props => {
    return (
        <form className='form'>
             <p>Effective January 1st, 2020, Washington state will begin calculating real estate excise taxes (REET) based on a tier system. Find out how this could effect your plans for selling your home.</p>
            <h2>Enter Your Home Value to Calculate REET Tax:</h2>
            <input onChange={props.handleInput} />
            <button onClick={props.handleSubmit}>Calculate</button>
        </form>
    )
}

export default Form;