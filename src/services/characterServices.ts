import { Character, Job, PersonRelative, Relative, Group, Activity, Food, Good } from '@/models/class/Characters'; // Assuming the classes are in a file named CharacterClasses.ts
import { API_URL } from '@/utils/util';

// utils/loadCharacters.ts


// import { Character, Job, PersonRelative, Relative, Group, Activity, Food, Good } from './characterClasses';

export async function fetchAllCharacters(): Promise<Character[]> {
  const response = await fetch(API_URL+ '/rti/characters/full');
  const data = await response.json();
  
  return data.data.map((charData: any) => {
    const character = new Character();
    character.charId = charData.charId;
    character.fullName = charData.fullName;
    character.nickname = charData.nickname;
    character.description = charData.description;
    character.age = charData.age;
    character.gender = charData.gender;
    character.origin = charData.origin;
    character.isDateable = charData.isDateable;

    character.jobs = charData.jobs?.map((jobData: any) => {
      const job = new Job();
      job.jobId = jobData.jobId;
      job.jobName = jobData.jobName;
      return job;
    });

    character.likes = mapGroup(charData.likes);
    character.dislikes = mapGroup(charData.dislikes);

    character.relatives = charData.relatives?.map((relData: any) => {
      const relative = new PersonRelative();
      relative.charId = relData.charId;
      relative.fullName = relData.fullName;
      relative.relative = new Relative();
      relative.relative.relativeStatus = relData.relative?.relativeStatus;
      return relative;
    });

    return character;
  });
}

function mapGroup(groupData: any): Group | undefined {
  if (!groupData) return undefined;

  const group = new Group();
  group.activities = groupData.activities?.map((activityData: any) => {
    const activity = new Activity();
    activity.activityId = activityData.activityId;
    activity.activityName = activityData.activityName;
    return activity;
  });

  group.foods = groupData.foods?.map((foodData: any) => {
    const food = new Food();
    food.foodId = foodData.foodId;
    food.foodName = foodData.foodName;
    return food;
  });

  group.goods = groupData.goods?.map((goodData: any) => {
    const good = new Good();
    good.goodId = goodData.goodId;
    good.goodName = goodData.goodName;
    return good;
  });

  return group;
}

export async function fetchAllCharactersById(charId:number): Promise<Character> {
    const response = await fetch(API_URL + '/rti/characters/full/'+charId);
    const data = await response.json();
    const charData = data.data;
    
    
      const character = new Character();
      character.charId = charData.charId;
      character.fullName = charData.fullName;
      character.nickname = charData.nickname;
      character.description = charData.description;
      character.age = charData.age;
      character.gender = charData.gender;
      character.origin = charData.origin;
      character.isDateable = charData.isDateable;
  
      character.jobs = charData.jobs?.map((jobData: any) => {
        const job = new Job();
        job.jobId = jobData.jobId;
        job.jobName = jobData.jobName;
        return job;
      });
  
      character.likes = mapGroup(charData.likes);
      character.dislikes = mapGroup(charData.dislikes);
  
      character.relatives = charData.relatives?.map((relData: any) => {
        const relative = new PersonRelative();
        relative.charId = relData.charId;
        relative.fullName = relData.fullName;
        relative.relative = new Relative();
        relative.relative.relativeStatus = relData.relative?.relativeStatus;
        return relative;
      });
  
      return character;
    
  }


