import Image from "@/components/atoms/Image";
import Text from "../../atoms/Text";
import { Color } from "@/models/Color";
import { TextAlignment } from "@/models/Alignment";
import Button from "@/components/atoms/Button";
import { ButtonStyle } from "@/models/Button";


const RtiWelcome:React.FC = ()=>{
    return (
        <div>
        <Text isBlock={true } color={Color.NEUTRAL} alignment={TextAlignment.JUSTIFY} >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere dolorem nesciunt nemo harum, fuga tempore blanditiis vel modi voluptatem aliquid amet veniam recusandae numquam unde incidunt sequi illo similique.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere dolorem nesciunt nemo harum, fuga tempore blanditiis vel modi voluptatem aliquid amet veniam recusandae numquam unde incidunt sequi illo similique.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere dolorem nesciunt nemo harum, fuga tempore blanditiis vel modi voluptatem aliquid amet veniam recusandae numquam unde incidunt sequi illo similique.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere dolorem nesciunt nemo harum, fuga tempore blanditiis vel modi voluptatem aliquid amet veniam recusandae numquam unde incidunt sequi illo similique.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere dolorem nesciunt nemo harum, fuga tempore blanditiis vel modi voluptatem aliquid amet veniam recusandae numquam unde incidunt sequi illo similique.
          </Text>
          <Button label="sss" style={ButtonStyle.GLASS}  />
      
        </div>
    )
}

export default RtiWelcome;