import React from 'react';

const Form = props => {
    return (
        <form className='form'>
             <p>Effective January 1st, 2020, Washington state will begin calculating real estate excise taxes (REET) based on a tier system. Find out how this could effect your plans for buying or selling a home.</p>
            <h2>How much is your home worth?</h2>
            <input onChange={props.handleInput} onKeyDown={props.onDelete} />
            <button onClick={props.handleSubmit}>Calculate</button>
        </form>
    )
}

export default Form;