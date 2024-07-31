// lib/fetchMembers.ts
import { Member } from "@/models/class/Jkt48";
import { BASE_URL } from "@/utils/util";



export const fetchMembers = async (): Promise<Member[]> => {
  const response = await fetch(BASE_URL+'/assets/members.json');
  if (!response.ok) {
    throw new Error('Failed to fetch members');
  }
  const data: Member[] = await response.json();
  return data;
};
