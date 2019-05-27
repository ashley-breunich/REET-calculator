import React from 'react';

const Reet = props => {
    return (
        <React.Fragment>
        <div className="reet-render">
            <h2 className="description">Based on your inputted home price of ${props.homePrice}, a comparison of your 2019 and 2020 Real Estate Excise Taxes are below.</h2>
            <div className="results">
                <div className="column-one">
                    <h3>2019 REET Cost</h3>
                    <p>${props.oldReet}</p>
                </div>
                <div className="column-two">
                    <h3>2020 REET Cost</h3>
                    <p>${props.newReet}</p>
                </div>
            </div>
        </div>
        
        </React.Fragment>
    )
}

export default Reet;