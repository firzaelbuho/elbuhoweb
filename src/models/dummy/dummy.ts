import { Character, Job, PersonRelative, Relative, Group, Activity, Food, Good } from '@/models/class/Characters'; // Assuming the classes are in a file named CharacterClasses.ts

// utils/loadCharacters.ts

const baseUrl = "http://localhost:3000"

// import { Character, Job, PersonRelative, Relative, Group, Activity, Food, Good } from './characterClasses';

export async function loadCharacters(): Promise<Character[]> {
  const response = await fetch(baseUrl+'/assets/characters.json');
  const data = await response.json();
  
  return data.map((charData: any) => {
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


export function getAllCharacters(): Character[] {
    const characters: Character[] = [];

    const linda: Character = {
        charId: "1",
        fullName: "Linda",
        nickname: undefined,
        description: "Anak kepala desa yang rajin membantu orang tua dan ramah kepada pendatang.",
        age: 17,
        gender: "Perempuan",
        origin: "Asli",
        jobs: [{ jobId: "1", jobName: "Pelajar" }],
        isDateable: false,
        likes: { activities: [], foods: [], goods: [] },
        dislikes: { activities: [], foods: [], goods: [] },
        relatives: [
            { charId: "2", fullName: "Lia", relative: { relativeStatus: "adik" } },
            { charId: "3", fullName: "Pak Kepala Desa", relative: { relativeStatus: "ayah" } }
        ]
    };

    const lia: Character = {
        charId: "2",
        fullName: "Lia",
        nickname: undefined,
        description: "Adik Linda yang pintar dan sangat menyukai kegiatan seni.",
        age: 14,
        gender: "Perempuan",
        origin: "Asli",
        jobs: [{ jobId: "1", jobName: "Pelajar" }],
        isDateable: false,
        likes: { activities: [], foods: [], goods: [] },
        dislikes: { activities: [], foods: [], goods: [] },
        relatives: [
            { charId: "1", fullName: "Linda", relative: { relativeStatus: "kakak" } },
            { charId: "3", fullName: "Pak Kepala Desa", relative: { relativeStatus: "ayah" } }
        ]
    };

    const joni: Character = {
        charId: "4",
        fullName: "Joni",
        nickname: undefined,
        description: "Petugas keamanan yang menganggap Jeki sebagai sosok ayah.",
        age: 20,
        gender: "Laki-laki",
        origin: "Pendatang",
        jobs: [{ jobId: "2", jobName: "Petugas Keamanan" }],
        isDateable: false,
        likes: { activities: [], foods: [], goods: [] },
        dislikes: { activities: [], foods: [], goods: [] },
        relatives: [
            { charId: "5", fullName: "Jeki", relative: { relativeStatus: "pengganti ayah" } }
        ]
    };

    const jeki: Character = {
        charId: "5",
        fullName: "Jeki",
        nickname: undefined,
        description: "Petugas keamanan senior yang bertindak sebagai sosok ayah bagi Joni.",
        age: 34,
        gender: "Laki-laki",
        origin: "Asli",
        jobs: [{ jobId: "2", jobName: "Petugas Keamanan" }],
        isDateable: false,
        likes: { activities: [], foods: [], goods: [] },
        dislikes: { activities: [], foods: [], goods: [] },
        relatives: [
            { charId: "4", fullName: "Joni", relative: { relativeStatus: "anak angkat" } }
        ]
    };

    const lino: Character = {
        charId: "6",
        fullName: "Lino",
        nickname: undefined,
        description: "Teknisi jenius yang bertanggung jawab atas sumber daya listrik di pulau.",
        age: 25,
        gender: "Laki-laki",
        origin: "Pendatang",
        jobs: [{ jobId: "3", jobName: "Teknisi" }],
        isDateable: false,
        likes: { activities: [], foods: [], goods: [] },
        dislikes: { activities: [], foods: [], goods: [] },
        relatives: []
    };

    const riani: Character = {
        charId: "7",
        fullName: "Riani",
        nickname: undefined,
        description: "Penjahit yang tinggal di desa bersama suami dan anaknya.",
        age: 35,
        gender: "Perempuan",
        origin: "Asli",
        jobs: [{ jobId: "4", jobName: "Penjahit" }],
        isDateable: false,
        likes: { activities: [], foods: [], goods: [] },
        dislikes: { activities: [], foods: [], goods: [] },
        relatives: [
            { charId: "8", fullName: "Andi", relative: { relativeStatus: "suami" } },
            { charId: "9", fullName: "Ria", relative: { relativeStatus: "anak" } }
        ]
    };

    const andi: Character = {
        charId: "8",
        fullName: "Andi",
        nickname: undefined,
        description: "Staff pelabuhan yang bekerja keras untuk keluarganya.",
        age: 38,
        gender: "Laki-laki",
        origin: "Asli",
        jobs: [{ jobId: "5", jobName: "Staff Pelabuhan" }],
        isDateable: false,
        likes: { activities: [], foods: [], goods: [] },
        dislikes: { activities: [], foods: [], goods: [] },
        relatives: [
            { charId: "7", fullName: "Riani", relative: { relativeStatus: "istri" } },
            { charId: "9", fullName: "Ria", relative: { relativeStatus: "anak" } }
        ]
    };

    const ria: Character = {
        charId: "9",
        fullName: "Ria",
        nickname: undefined,
        description: "Anak Riani dan Andi yang berteman baik dengan Lia.",
        age: 12,
        gender: "Perempuan",
        origin: "Asli",
        jobs: [{ jobId: "1", jobName: "Pelajar" }],
        isDateable: false,
        likes: { activities: [], foods: [], goods: [] },
        dislikes: { activities: [], foods: [], goods: [] },
        relatives: [
            { charId: "7", fullName: "Riani", relative: { relativeStatus: "ibu" } },
            { charId: "8", fullName: "Andi", relative: { relativeStatus: "ayah" } }
        ]
    };

    const heri: Character = {
        charId: "10",
        fullName: "Heri",
        nickname: undefined,
        description: "Dokter senior yang ingin mengabdi ke masyarakat di pulau terpencil.",
        age: 43,
        gender: "Laki-laki",
        origin: "Pendatang",
        jobs: [{ jobId: "6", jobName: "Dokter" }],
        isDateable: false,
        likes: { activities: [], foods: [], goods: [] },
        dislikes: { activities: [], foods: [], goods: [] },
        relatives: [
            { charId: "11", fullName: "Viona", relative: { relativeStatus: "anak" } }
        ]
    };

    const viona: Character = {
        charId: "11",
        fullName: "Viona",
        nickname: undefined,
        description: "Perawat yang lembut dan cantik, membantu pekerjaan ayahnya.",
        age: 22,
        gender: "Perempuan",
        origin: "Pendatang",
        jobs: [{ jobId: "7", jobName: "Perawat" }],
        isDateable: false,
        likes: { activities: [], foods: [], goods: [] },
        dislikes: { activities: [], foods: [], goods: [] },
        relatives: [
            { charId: "10", fullName: "Heri", relative: { relativeStatus: "ayah" } }
        ]
    };

    const budi: Character = {
        charId: "12",
        fullName: "Budi",
        nickname: undefined,
        description: "Guru senior sekaligus kepala sekolah di desa.",
        age: 36,
        gender: "Laki-laki",
        origin: "Asli",
        jobs: [{ jobId: "8", jobName: "Guru" }],
        isDateable: false,
        likes: { activities: [], foods: [], goods: [] },
        dislikes: { activities: [], foods: [], goods: [] },
        relatives: []
    };

    const dewi: Character = {
        charId: "13",
        fullName: "Dewi",
        nickname: undefined,
        description: "Guru pembantu yang bertekad untuk mencerdaskan anak-anak di desa.",
        age: 22,
        gender: "Perempuan",
        origin: "Pendatang",
        jobs: [{ jobId: "9", jobName: "Guru Pembantu" }],
        isDateable: false,
        likes: { activities: [], foods: [], goods: [] },
        dislikes: { activities: [], foods: [], goods: [] },
        relatives: []
    };

    const max: Character = {
        charId: "14",
        fullName: "Max",
        nickname: undefined,
        description: "Penjaga pantai yang ceria dan humoris.",
        age: 30,
        gender: "Laki-laki",
        origin: "Asli",
        jobs: [{ jobId: "10", jobName: "Penjaga Pantai" }],
        isDateable: false,
        likes: { activities: [], foods: [], goods: [] },
        dislikes: { activities: [], foods: [], goods: [] },
        relatives: [
            { charId: "15", fullName: "Yunus", relative: { relativeStatus: "kakak" } }
        ]
    };

    const yunus: Character = {
        charId: "15",
        fullName: "Yunus",
        nickname: undefined,
        description: "Saudara Max yang lebih tua dan selalu menjaga adiknya.",
        age: 33,
        gender: "Laki-laki",
        origin: "Asli",
        jobs: [{ jobId: "11", jobName: "Nelayan" }],
        isDateable: false,
        likes: { activities: [], foods: [], goods: [] },
        dislikes: { activities: [], foods: [], goods: [] },
        relatives: [
            { charId: "14", fullName: "Max", relative: { relativeStatus: "adik" } }
        ]
    };

    characters.push(linda, lia, joni, jeki, lino, riani, andi, ria, heri, viona, budi, dewi, max, yunus);
    return characters;
}