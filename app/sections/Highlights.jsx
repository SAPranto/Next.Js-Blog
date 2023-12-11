"use client";
import React, { useState } from 'react';
import ProductCard from './components/ProductCard';

const Highlights = () => {
  const [selectedTab, setSelectedTab] = useState('tab1'); // Default selected tab

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className='wrapper'>
      <div className='cont'>
        <h2 className='heading'>HIGHLIGHTS</h2>
        <div>
          <div className='w-full flex justify-end pb-6'>
            <div className='flex border border-black rounded-full px-1 py-1'>
            <button
              className={`${selectedTab === 'tab1' ? 'w-5 h-5 bg-black rounded-full' : 'w-5 h-5 bg-transparent rounded-full'}`}
              onClick={() => handleTabChange('tab1')}
            >
              
            </button>
            <button
              className={`${selectedTab === 'tab2' ? 'w-5 h-5 bg-black rounded-full' : 'w-5 h-5 bg-transparent rounded-full'}`}
              onClick={() => handleTabChange('tab2')}
            >
              
            </button>
            {/* Add more tabs as needed */}
            </div>
          </div>
          <div className='tab-content'>
            {selectedTab === 'tab1' && <ProductCard tab='tab1' />}
            {selectedTab === 'tab2' && <ProductCard tab='tab2' />}
            {/* Add more tab content as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
