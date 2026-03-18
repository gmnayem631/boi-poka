import React from 'react';

const Spinner = () => {
  return (
    <div className="flex h-full w-full items-center justify-center py-20">
      <span className="loading loading-infinity h-16 w-16"></span>
    </div>
  );
};

export default Spinner;
