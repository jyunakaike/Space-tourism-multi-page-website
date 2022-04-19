import React from 'react';
import { Technology } from '@components/Technology';
import initialState from 'db/initialState';

const technology = () => {
    const technologyList = initialState.technology

    return (
        <Technology technologyList={technologyList}  />
    )
}

export default technology