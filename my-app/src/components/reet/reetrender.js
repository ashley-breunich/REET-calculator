import React from 'react';

const Reet = props => {
    return (
        <React.Fragment>
        <div className="reet-render">
            <h2 className="description">Based on your inputted home price of ${props.homePrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}, a comparison of your 2019 and 2020 real estate excise taxes are below.</h2>
            <div className="results">
                <div className="column-one">
                    <h3>2019 REET Cost</h3>
                    <p>${Math.round(props.oldReet).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
                </div>
                <div className="column-two">
                    <h3>2020 REET Cost</h3>
                    <p>${Math.round(props.newReet).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Reet;