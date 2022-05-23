import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-screen absolute top-0 left-0 w-full h-full">
                <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default Loading;