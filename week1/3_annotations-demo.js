"use strict";
let MovieName = "Bahubali";
let ReleaseDate = 2025;
let isHit = true;
function MovieStatus(title, date) {
    return `${title} is a hit movie released in ${date}`;
}
const Summary = MovieStatus(MovieName, ReleaseDate);
let LeadActors = ["Tamannah", "Anushka", "Prabhash", "Rana", "Ramya Krishna"];
console.log(Summary);
console.log(LeadActors.join(","));
console.log("Is Movie BlockBuster ?" + isHit);
