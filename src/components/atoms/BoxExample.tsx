
import React from 'react';
import classNames from 'classnames';
import { Dimension } from '@/models/enum/Layout';

interface BoxExampleProps {
  width?: Dimension;
  height?: Dimension;
}

const BoxExample: React.FC<BoxExampleProps> = ({ 
  width = Dimension.FULL,
  height = Dimension['56D']

 }) => {
  const boxexampleClass = classNames(

    "flex items-center align-bottom bg-primary text-center text-primary-content",
    `h-${height}`,
    `w-${width}`
  );

  return (
    <div className={boxexampleClass}>
        <p className="mx-auto">This is Example</p>
    </div>
  );
};

export default BoxExample;







