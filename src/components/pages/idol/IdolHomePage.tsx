
import React from 'react';
import classNames from 'classnames';
import { fetchMembers } from '@/services/memberServices';
import { Member } from '@/models/class/Jkt48';
import { useEffect, useState } from 'react';
import MemberCard from '@/components/molecules/idol/MemberCard';
import FlexColumn from '@/components/atoms/FlexColumn';
import GridColumn from '@/components/atoms/GridColumn';
import FlexRow from '@/components/atoms/FlexRow';
import { ContentAlignment } from '@/models/enum/Alignment';
import { Dimension } from '@/models/enum/Layout';
import { Color } from '@/models/enum/Color';


interface IdolHomePageProps {
  
}

const IdolHomePage: React.FC<IdolHomePageProps> = ({  }) => {
//   const members = await fetchMembers()

const [members, setMembers] = useState<Member[]>([]);

useEffect(() => {
  async function fetchCharacters() {
    const loadedMembers = await fetchMembers();
    setMembers(loadedMembers);
    console.log(loadedMembers)
  }

  fetchCharacters();
}, []);

  return (
    <div>
       <h1>Member List</h1>
       <FlexRow 
          // backgroundColor={Color.PRIMARY}
          horizontalAlignment={ContentAlignment.CENTER}>

        {members.map((member)=>(
              <div key={member.memberId} className='p-3'>
                  <MemberCard member={member} />
              </div>
            
          ))}
       </FlexRow>
       
    </div>
  );
};

export default IdolHomePage;
