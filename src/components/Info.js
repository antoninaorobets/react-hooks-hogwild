import React from 'react';

function Info({hog}) {
    const greased = hog.greased
    const hma = "highest medal achieved"
  return <div className="meta">
      <p>Specialty: {hog.specialty}</p>
      <p>  {greased? "greased": false  }</p>
      <p>Weight: {hog.weight}</p>
      <strong>Highest medal achieved: {hog.hma} </strong>
  </div>;
}

export default Info;
