import React from 'react';

const Reet = props => {
    return (
        <React.Fragment>
        <div className="column-one">
            <h3>2019 REET Cost</h3>
            <p>{props.oldReet}</p>
        </div>
        <div className="column-two">
            <h3>2020 REET Cost</h3>
            <p>{props.newReet}</p>
        </div>
        </React.Fragment>
    )
}

export default Reet;