import Button from "../atoms/Button"
import TextInput from "../atoms/TextInput"
import TextBlock from "../atoms/Text"
import Image from "../atoms/Image"
import Text from "../atoms/BBText"

export default function Testing(){
    return (
        <div>
      <h1>Image Component Example</h1>
      <Image 
        url="https://static.wixstatic.com/media/9965a8_da553365fd174ed89f441ecc6299fc09~mv2.jpg/v1/fill/w_1583,h_840,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9965a8_da553365fd174ed89f441ecc6299fc09~mv2.jpg" 
      
        fit="cover" 
        alt="Example Cover"
      />
      <Image 
        url="https://static.wixstatic.com/media/9965a8_da553365fd174ed89f441ecc6299fc09~mv2.jpg/v1/fill/w_1583,h_840,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9965a8_da553365fd174ed89f441ecc6299fc09~mv2.jpg" 
        width="150px" 
        height="150px" 
        fit="contain" 
        alt="Example Contain"
      />
      <Image 
        url="https://static.wixstatic.com/media/9965a8_da553365fd174ed89f441ecc6299fc09~mv2.jpg/v1/fill/w_1583,h_840,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9965a8_da553365fd174ed89f441ecc6299fc09~mv2.jpg" 
        width="150px" 
        height="150px" 
        fit="fill" 
        alt="Example Fill"
      />
      <Image 
        url="https://static.wixstatic.com/media/9965a8_da553365fd174ed89f441ecc6299fc09~mv2.jpg/v1/fill/w_1583,h_840,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9965a8_da553365fd174ed89f441ecc6299fc09~mv2.jpg" 
        width="150px" 
        height="150px" 
        fit="none" 
        alt="Example None"
      />
      <Image 
        url="https://static.wixstatic.com/media/9965a8_da553365fd174ed89f441ecc6299fc09~mv2.jpg/v1/fill/w_1583,h_840,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9965a8_da553365fd174ed89f441ecc6299fc09~mv2.jpg" 
      
        fit="scale-down" 
        alt="Example Scale Down"
      />
    </div>
    )
}