import React from 'react';

const Added = (props) => {
    const added = props.added;
    let totalPopulation = 0;
    for (let i = 0; i < added.length; i++) {
        const country = added[i];
        totalPopulation = totalPopulation + country.population;
    }

    // const totalPopulation = added.reduce((sum, country) => sum + country.population, 0);
    return (
        <div>
            <h2>Added {added.length}</h2>
            <p>Total Population : {totalPopulation}</p>
        </div>
    );
};

export default Added;