import React from 'react';

const Form = props => {
    return (
        <form className='form'>
             <p>Effective January 1st, 2020, Washington state will begin calculating real estate excise taxes (REET) based on a tier system. Find out how this could effect your plans for selling your home.</p>
            <h2>Enter Your Home Value to Calculate REET Tax:</h2>
            <h4>Municipality tax of .5% included in estimate. Muncipalities of Darrington, Eatonville, Skykomish and Wilkeson have a lower tax rate of .25%. For more information, read the senate bill <a href="https://rezora-userfiles-filemanager.s3-us-west-2.amazonaws.com/7591/Whats_Next/June_2019/5998-S_SL.pdf" target="_blank" rel="noopener noreferrer">here</a>.</h4>
            <input onChange={props.handleInput} />
            <button onClick={props.handleSubmit}>Calculate</button>
        </form>
    )
}

export default Form;