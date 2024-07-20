
import React, { Children } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { AnimationStyle } from '@/models/Animation';

interface AnimationOnScrollProps {
    children?: React.ReactNode;
    anim?:AnimationStyle;
    duration?:number;

}

const AnimationOnScroll: React.FC<AnimationOnScrollProps> = ({ 
    children,
    anim = AnimationStyle.SWIPE_UP,
    duration = 0.5
}) => {

    let x0 = 0;
    let x1 = 0;
    let y0 = 0;
    let y1 = 0;

    switch(anim){
        case AnimationStyle.SWIPE_UP:
            y0=100;
            y1=0;
            break;
        case AnimationStyle.SWIPE_DOWN:
            y0=-100;
            y1=0;
            break;
        case AnimationStyle.SWIPE_RIGHT:
            x0=-100;
            x1=0;
            break;
        case AnimationStyle.SWIPE_LEFT:
            x0=100;
            x1=0;
            break;
    }
 

    return (
        <motion.div
            initial={{ opacity: 0, y: y0 , x:x0}}
            whileInView={{ opacity: 1, y: y1 , x:x1 }}
            transition={{ duration }}
        >
            {children}
        </motion.div>
    );
};

export default AnimationOnScroll;
