import Image from "@/components/atoms/Image";
import Text from "../../atoms/Text";
import { Color } from "@/models/enum/Color";
import { TextAlignment } from "@/models/enum/Alignment";
import Button from "@/components/atoms/Button";
import { ButtonStyle } from "@/models/enum/Button";
import Flex from "@/components/atoms/FlexRow";
import GridColumn from "@/components/atoms/GridColumn";
import GridCell from "@/components/atoms/GridCell";
import { Size } from "@/models/enum/Size";
import { TextLevel } from "@/models/enum/Typography";


const Welcome:React.FC = ()=>{
    return (
        <GridColumn cols={12}>
            <GridCell colSpan={4}>
                <Text textLevel={TextLevel.H2}>WELCOME</Text>
            </GridCell>
            <GridCell colSpan={8}>
                <Text color={Color.BASE_CONTENT} textAlignment={TextAlignment.JUSTIFY} >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere dolorem nesciunt nemo harum, fuga tempore blanditiis vel modi voluptatem aliquid amet veniam recusandae numquam unde incidunt sequi illo similique.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere dolorem nesciunt nemo harum, fuga tempore blanditiis vel modi voluptatem aliquid amet veniam recusandae numquam unde incidunt sequi illo similique.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere dolorem nesciunt nemo harum, fuga tempore blanditiis vel modi voluptatem aliquid amet veniam recusandae numquam unde incidunt sequi illo similique.
               
                </Text> 
            </GridCell>
        </GridColumn>
        
      
        )
        
}

export default Welcome;