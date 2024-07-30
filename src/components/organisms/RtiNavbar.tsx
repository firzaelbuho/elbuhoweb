
import GridColumn from "../atoms/GridColumn";
import Container from "../atoms/Container";
import { Dimension } from "@/models/enum/Layout";
import GridCell from "../atoms/GridCell";
import { TextLevel } from "@/models/enum/Typography";
import Text from "../atoms/Text";
import { Color } from "@/models/enum/Color";
import { TextAlignment } from "@/models/enum/Alignment";
import ThemeChanger from "../molecules/general/ThemeChanger";
import Image from "../atoms/Image";
import { color } from "framer-motion";

function RtiNavbar(){
    
    return(
        <nav className="bg-base-100 fixed w-full pt-8 pb-5 z-[9999]" >
            <Container backgroundColor={Color.INHERIT}  width={Dimension["2/3"]}>
                <GridColumn cols={12}>
                    {/* title */}
                    <GridCell colSpan={2}  >
                        <Image
                            width={Dimension["2/3"]}
                            src="/relife-logo.svg"
                        />
                    </GridCell>
                    <GridCell colSpan={6}  >
                        {/* <Text textLevel={TextLevel.H3} >relife</Text> */}
                    </GridCell>
                    <GridCell>
                         <ThemeChanger />
                    </GridCell>

                    {/* links */}
                    <GridCell >
                        <Text textLevel={TextLevel.H6} textAlignment={TextAlignment.RIGHT} >Home</Text>
                    </GridCell>
                    <GridCell>
                        <Text textLevel={TextLevel.H6} textAlignment={TextAlignment.RIGHT} textColor={Color.ACCENT} >Home</Text>
                    </GridCell>
                    <GridCell>
                        <Text textLevel={TextLevel.H6} textAlignment={TextAlignment.RIGHT} >End</Text>
                    </GridCell>
                    
                </GridColumn>
            </Container>
           
        </nav>


    )
}
export default RtiNavbar;