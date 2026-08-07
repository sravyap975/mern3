let MovieName:string="Bahubali";
let ReleaseDate:number=2025;
let isHit:boolean=true;

function MovieStatus(title:string,date:number):string{
    return `${title} is a hit movie released in ${date}`; 
}

const Summary=MovieStatus(MovieName,ReleaseDate);
let LeadActors=["Tamannah","Anushka","Prabhash","Rana","Ramya Krishna"];

console.log(Summary);
console.log(LeadActors.join(","));
console.log("Is Movie BlockBuster ?"+ isHit);