import Image from "@/components/atoms/Image";
import { ImageAlignment } from "@/models/Alignment";
import { ImageFit } from "@/models/Image";
import { Dimension } from "@/models/Layout";


const Jumbotron:React.FC = ()=>{
    return (
        <div className="py-5">
        <Image 
          url="https://static.wixstatic.com/media/9965a8_da553365fd174ed89f441ecc6299fc09~mv2.jpg/v1/fill/w_1583,h_840,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9965a8_da553365fd174ed89f441ecc6299fc09~mv2.jpg" 
          fit={ImageFit.FILL} 
          alt="Example Cover"
          width={Dimension["8/12"]}
          imageAlignment={ImageAlignment.CENTER}
         
         
         
        />
        </div>
    )
}

export default Jumbotron;