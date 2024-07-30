// lib/fetchMembers.ts
import { Member } from "@/models/class/Jkt48";

const baseUrl = "http://localhost:3000"

export const fetchMembers = async (): Promise<Member[]> => {
  const response = await fetch(baseUrl+'/assets/members.json');
  if (!response.ok) {
    throw new Error('Failed to fetch members');
  }
  const data: Member[] = await response.json();
  return data;
};
