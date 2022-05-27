import React from 'react';

const PrimaryBtn = ({ children }) => {
    return (
        <div>
        <button className="btn btn-primary">{children}</button>
        </div>
    );
};

export default PrimaryBtn;