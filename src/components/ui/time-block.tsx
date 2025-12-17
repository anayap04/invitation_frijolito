
import React from 'react';

const TimeBlock = ({ value, label }) => (
    <div className="flex flex-col items-center rounded-lg p-4 shadow-lg min-w-[100px]">
      <div className="pixel-text-medium text-purple-800 font-bold mb-2 mt-4">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-sm uppercase tracking-wider text-blue-100 font-medium">
        {label}
      </div>
    </div>
  );

  export default TimeBlock;