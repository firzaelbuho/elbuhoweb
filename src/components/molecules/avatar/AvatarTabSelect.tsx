
import React from 'react';
import classNames from 'classnames';
import FlexRow from '@/components/atoms/FlexRow';
import FlexChild from '@/components/atoms/FlexChild';
import { Dimension } from '@/models/enum/Layout';
import { Basis, FlexWrap } from '@/models/enum/Flex';
import { Padding } from '@/models/class/Layout';
import GridCell from '@/components/atoms/GridCell';
import ComponentRepeater from '@/components/atoms/ComponentRepeater';
import Image from '@/components/atoms/Image';
import { ImageFit } from '@/models/enum/Image';
import GridColumn from '@/components/atoms/GridColumn';
import GridRow from '@/components/atoms/GridRow';
import { useState } from 'react';
import AvatarItemSelect from './AvatarItemSelect';

interface AvatarTabSelectProps {
  
}

const AvatarTabSelect: React.FC<AvatarTabSelectProps> = ({  }) => {
  const avatartabselectClass = classNames({
    
  });

  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5', 'Tab 6', 'Tab 7', 'Tab 8', 'Tab 9', 'Tab 10'];

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <div className="inline-flex space-x-4 p-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg ${
                activeTab === index
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4 px-2 py-4 border rounded-lg ">
        <h2 className="text-xl font-bold">{tabs[activeTab]}</h2>
        <div className='h-56 overflow-auto'><AvatarItemSelect /></div>

      </div>
    </div>
  );
};

export default AvatarTabSelect;
