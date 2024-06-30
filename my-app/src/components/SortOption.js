import React from 'react';

const SortOption = ({ onSort }) => {
  return (
    <div>
      <button onClick={() => onSort('course')}>按課程排序</button>
      <button onClick={() => onSort('rating')}>按評分排序</button>
    </div>
  );
};

export default SortOption;
