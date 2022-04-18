import React from 'react';
import Destination from 'components/Destination';
import initialState from 'db/initialState';

const destination = () => {
  const destinationNames = initialState.destinations;

  return (
    <React.Fragment>
      <Destination destinationNames={destinationNames} />
    </React.Fragment>
  )
}

export default destination