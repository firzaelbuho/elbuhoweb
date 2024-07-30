
import React from 'react';
import classNames from 'classnames';
import { useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';

interface AvatarCanvasProps {
  
}

const AvatarCanvas: React.FC<AvatarCanvasProps> = ({  }) => {
    // const avatarcanvasClass = classNames({
    
    // });

   

    const boxRef = useRef(null);
    const [fileName, setFileName] = useState('download');

    const handleDownload = async () => {
        if (boxRef.current === null) {
          return;
        }
    
        try {
          const dataUrl = await toPng(boxRef.current);
          saveAs(dataUrl, `${fileName}.png`);
        } catch (error) {
          console.error('Failed to download image:', error);
        }
    };
    const handleChange =  (e: React.ChangeEvent<HTMLInputElement>) => {
         setFileName(e.target.value)
    };
    const updateFileName = (value:string)=>{
        setFileName(value);
    }



    return (
      <div className=''>
        <div className=''>
            <div ref={boxRef} className="box-container">
                <div className="box bg-blue-500 w-full h-64 flex items-center justify-center text-white text-lg">
                    Blue Box
                </div>
            </div>
        </div>
      
      

      <div className='py-3'>
        <Input value={fileName} onChange={updateFileName} />
      </div>
      <div className=''>
        <Button onClick={handleDownload} label='Download' />
      </div>
      
     
    </div>
  );
};

export default AvatarCanvas;
