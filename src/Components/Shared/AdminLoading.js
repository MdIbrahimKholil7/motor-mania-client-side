import React from 'react';

const AdminLoading = () => {
    return (
        <div className='w-full  h-full  absolute top-0 left-0'>
            <div className="flex items-center justify-center h-full  w-full ">
                <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default AdminLoading;