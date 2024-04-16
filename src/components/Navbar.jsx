'use client'
import React, { useState } from 'react';
import NavItem from '@/components/NavItem';

function Navbar() {
  // State to keep track of the selected option
  const [selectedOption, setSelectedOption] = useState('fetchTopRated'); // Initially, fetchTopRated is selected

  // Function to handle option change
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6'>
      {/* Pass the selectedOption state and handleOptionChange function to NavItem */}
      <NavItem title='Trending' param='fetchTrending' selectedOption={selectedOption} onSelectOption={handleOptionChange} />
      <NavItem title='TopRated' param='fetchTopRated' selectedOption={selectedOption} onSelectOption={handleOptionChange} />
    </div>
  );
}

export default Navbar;
