import React from 'react';

const Quizcalculate = ({index,quiz}) => {
    return (
        <h3 className="text-lg leading-9">{index+1+') '} {quiz}</h3>
    );
};

export default Quizcalculate;