import React from 'react';

const Form = props => {
    return (
        <form>
            <p>How much is your home worth?</p>
            <input onChange={props.handleInput}/>
            <button onClick={props.handleSubmit}>Submit</button>
        </form>
    )
}

export default Form;