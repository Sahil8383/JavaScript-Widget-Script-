import './App.css';
import TokenInfo from './components/TokenInfo';
import TokenDropdown from './components/TokenDropDown';
import React, { useState, useEffect } from 'react';

function App() {

  const [selectedToken, setSelectedToken] = useState('bitcoin');

  const handleTokenSelect = (token) => {
    setSelectedToken(token);
  };

  return (
    <>
      <div
        className='
          w-screen
          h-screen
          flex
          flex-row
          justify-center
          items-center
          bg-[#2d3133]
          lg:flex-col
          md:flex-col
          sm:flex-col
        '
      >
        <div
          className='
            w-1/2
            h-full
          '
        >
          <TokenDropdown onTokenSelect={handleTokenSelect} />
        </div>
        <div
          className='
            w-1/2
            h-full
            flex
            flex-col
            justify-center
            items-center
          '
        >
          <TokenInfo selectedToken={selectedToken} />
        </div>
      </div>
    </>
  );
}

export default App;
