
import React from 'react';
import classNames from 'classnames';

interface ComponentRepeaterProps {
  count?:number;
  children: React.ReactNode;
}

const ComponentRepeater: React.FC<ComponentRepeaterProps> = ({ 
    count = 10,
    children
 }) => {

    const counts: number[] = Array.from({ length: count }, (_, index) => index);
//   const componentrepeaterClass = classNames({
    
//   });

  return (
  
        counts.map((x)=>(
            children
        ))

  );
};

export default ComponentRepeater;
