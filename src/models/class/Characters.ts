export class Character{
    charId:string | undefined;
    fullName:string | undefined;
    nickname:string | undefined;
    description:string | undefined;
    age:number | undefined;
    gender:string | undefined;
    origin:string | undefined;
    jobs:Job[]|undefined;
    isDateable:boolean|undefined;
    likes:Group | undefined;
    dislikes:Group | undefined;
    relatives:PersonRelative[]| undefined

}

export class Person{
    charId:string | undefined;
    fullName:string | undefined;
    nickname:string | undefined;
    description:string | undefined;
    age:number | undefined;
    gender:string | undefined;
    origin:string | undefined;
    isDateable:boolean|undefined;

}

export class Job{
    jobId:string | undefined;
    jobName:string | undefined;

}

export class PersonRelative{
    charId:string | undefined;
    fullName:string | undefined;
    relative:Relative | undefined;
}

export class Relative{
    relativeStatus : string | undefined
}

export class Group{
    activities : Activity[] | undefined;
    foods : Food[] | undefined;
    goods : Good[] | undefined;
}

export class Activity{
    activityId:string | undefined;
    activityName:string | undefined;

}

export class Food{
    foodId:string | undefined;
    foodName:string | undefined;
    
}

export class Good{
    goodId:string | undefined;
    goodName:string | undefined;
    
}