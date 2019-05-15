import React from 'react';

const Form = props => {
    return (
        <form className='form'>
             <p>Lorem ipsum dolor amet schlitz thundercats venmo beard, prism drinking vinegar waistcoat tumblr. Air plant tilde jianbing ennui coloring book, banjo prism brunch fam trust fund taiyaki. Godard vinyl flexitarian, cardigan la croix semiotics next level kombucha sustainable succulents prism church-key organic. Vinyl banjo 3 wolf moon, biodiesel DIY franzen yuccie kitsch. Unicorn cardigan cornhole selvage. Synth tbh paleo distillery coloring book portland tattooed small batch butcher af. Hoodie chicharrones cronut chambray distillery, gluten-free narwhal fanny pack.</p>
            <h2>How much is your home worth?</h2>
            <input onChange={props.handleInput} />
            <button onClick={props.handleSubmit}>Calculate</button>
        </form>
    )
}

export default Form;