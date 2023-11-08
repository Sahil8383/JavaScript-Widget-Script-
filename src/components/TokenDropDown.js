import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

function TokenDropdown({ onTokenSelect }) {
  const tokens = ['Bitcoin', 'Ethereum', 'Tether', 'USD-Coin'];

  const handleTokenSelect = (value) => {
    onTokenSelect(value);
  };

  return (
    <div
      className='
        w-full
        h-full
        flex
        flex-col
        justify-center
        items-center
      '
    >
      <label
        className='
          text-2xl
          font-bold
          text-white
          text-center
          mb-4
        '
      >
        Select a token
      </label>

      <Select
        showSearch
        style={{ 
          width: 340,
          height: 50,
          margin: '0 auto',
          fontSize: 20,
          fontWeight: 600,
        }}
        placeholder="Select a token"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        onSelect={handleTokenSelect}
      >
        {tokens.map((token) => (
          <Option key={token} value={token}>
            {token}
          </Option>
        ))}
      </Select>
    </div>
  );
}

export default TokenDropdown;
