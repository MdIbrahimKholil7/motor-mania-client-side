import React from 'react';

const PrimaryBtn = ({ children }) => {
    return (
        <div>
            <button class="btn btn-primary">{children}</button>
        </div>
    );
};

export default PrimaryBtn;