"use client";

import RtiCharacterPage from '@/components/pages/rti/RtiCharacterPage';
import { Character } from '@/models/class/Characters';
import { getAllCharacters, loadCharacters } from '@/models/dummy/dummy';
import { fetchAllCharactersById } from '@/services/characterServices';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const CharacterPage = () => {
  const params = useParams();
  const { id } = params;
  const charId = parseInt(id+"");
 
  
 

  return (
    <div>
     
      {/* {characters.map((char)=>(char.fullName))} */}
      <RtiCharacterPage charId={charId}/>
    </div>
  );
};

export default CharacterPage;
