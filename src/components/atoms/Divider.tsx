
import React from 'react';
import classNames from 'classnames';

interface DividerProps {
  x?:number,
  y?:number
}

const Divider: React.FC<DividerProps> = ({ 
    x = 0,
    y = 0
 }) => {
  const dividerClass = classNames({
    
  });

  return (
    <div style={{height:`${y}px` , width : `${x}px`}}>
      {/* Divider content here */}
    </div>
  );
};

export default Divider;
