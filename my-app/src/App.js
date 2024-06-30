import React, { useState } from 'react';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import SortOption from './components/SortOption';
import { getFeedbacks } from './services/fetch';

const App = () => {
  const [feedbacks, setFeedbacks] = useState(getFeedbacks());
  const [filteredFeedbacks, setFilteredFeedbacks] = useState(feedbacks);

  const handleSearch = (query) => {
    const result = feedbacks.filter(f => 
      f.course.includes(query) || f.student.includes(query)
    );
    setFilteredFeedbacks(result);
  };

  const handleSort = (key) => {
    const sorted = [...filteredFeedbacks].sort((a, b) => a[key] > b[key] ? 1 : -1);
    setFilteredFeedbacks(sorted);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <SortOption onSort={handleSort} />
      <Table feedbacks={filteredFeedbacks} />
    </div>
  );
};

export default App;

