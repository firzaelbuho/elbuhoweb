
import React, { Children } from 'react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { AnimationStyle, AnimationTrigger } from '@/models/enum/Animation';

interface AnimationOnScrollProps {
    children?: React.ReactNode;
    anim?:AnimationStyle;
    triger?:AnimationTrigger;
    duration?:number;
    offset?:number;
    scaled?:number;

}

const Motion: React.FC<AnimationOnScrollProps> = ({ 
    children,
    anim = AnimationStyle.SWIPE_UP_IN,
    triger = AnimationTrigger.SCROLL,
    duration = 0.5,
    offset = 100,
    scaled = 1.1
}) => {

    let x0 = 0;
    let x1 = 0;
    let y0 = 0;
    let y1 = 0;


    let opacity0 = 1;
    let opacity1 = 1;
    let scaled0 = 1;
    let scaled1 = 1;

    switch(anim){
        case AnimationStyle.SWIPE_UP_IN:
            y0=offset;
            y1=0;
            opacity0 = 0;
            opacity1 = 1;
            break;
        case AnimationStyle.SWIPE_DOWN_IN:
            y0=-offset;
            y1=0;
            opacity0 = 0;
            opacity1 = 1;
            break;
        case AnimationStyle.SWIPE_RIGHT_IN:
            x0=-offset;
            x1=0;
            opacity0 = 0;
            opacity1 = 1;
            break;
        case AnimationStyle.SWIPE_LEFT_IN:
            x0=offset;
            x1=0;
            opacity0 = 0;
            opacity1 = 1;
            break;
        case AnimationStyle.FADE_IN:
            opacity0=0;
            opacity1=1;
            break;
        case AnimationStyle.SWIPE_UP_OUT:
            y0=0;
            y1=-offset;
            opacity0 = 1;
            opacity1 = 0;
            break;
        case AnimationStyle.SWIPE_DOWN_OUT:
            y0=0;
            y1=offset;
            opacity0 = 1;
            opacity1 = 0;
            break;
        case AnimationStyle.SWIPE_RIGHT_OUT:
            x0=0;
            x1=offset;
            opacity0 = 1;
            opacity1 = 0;
            break;
        case AnimationStyle.SWIPE_LEFT_OUT:
            x0=0;
            x1=-offset;
            opacity0 = 1;
            opacity1 = 0;
            break;
        case AnimationStyle.FADE_OUT:
            opacity0 = 1;
            opacity1 = 0;
            break;

        case AnimationStyle.ZOOM_IN:
            opacity0 = 0;
            opacity1 = 1;
            scaled0 = scaled;
            scaled1 = 1;
            break;
        case AnimationStyle.ZOOM_OUT:
            opacity0 = 1;
            opacity1 = 0;
            scaled0 = 1;
            scaled1 = scaled;
            break;
        
        case AnimationStyle.SCALED:
           
            scaled0 = 1;
            scaled1 = scaled;
            break;

        // case AnimationStyle.SWIPE_UP_IN_OUT:
        //     const [inView, setInView] = useState(false);
        //     const { ref } = useInView({
        //       onChange: (inView) => setInView(inView),
        //       triggerOnce: false,
        //     })

        //     return (
        //         <motion.div
        //           ref={ref}
        //           initial={{ opacity: 0, y: offset }}
        //           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: offset }}
        //           transition={{ duration: duration }}
        //         >
        //           {children}
        //         </motion.div>
        //     );
        //     break;
        
        
        
    }

    let animationProps = {};

    switch (triger) {
      case AnimationTrigger.TAP:
        animationProps = {
          initial: { opacity: opacity0, y: y0, x: x0 , scale : scaled0},
          whileTap: { opacity: opacity1, y: y1, x: x1, scale : scaled1},
          transition: { duration: duration }
        };
        break;
      case AnimationTrigger.SCROLL:
        animationProps = {
          initial: { opacity: opacity0, y: y0, x: x0, scale : scaled0 },
          whileInView: { opacity: opacity1, y: y1, x: x1, scale : scaled1 },
          transition: { duration: duration }
        };
        break;
    case AnimationTrigger.HOVER:
        animationProps = {
          initial: { opacity: opacity0, y: y0, x: x0, scale : scaled0 },
          whileHover: { opacity: opacity1, y: y1, x: x1, scale : scaled1 },
          transition: { duration: duration }
        };
        break;
      default:
        animationProps = {
          initial: { opacity: opacity0, y: y0, x: x0, scaled0 : 1 },
          animate: { opacity: opacity1, y: y1, x: x1 , scaled1 : 1},
          transition: { duration: duration }
        };
        break;
    }
  
    return (
      <motion.div {...animationProps}>
        {children}
      </motion.div>
    );
};

export default Motion;
