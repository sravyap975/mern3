let userName:string="Alice";
let userAge:number=25;
let isMember:boolean=true;
console.log("Data type of userName is -->"+typeof userName);
console.log("Data type of userAge is -->"+typeof userAge);
console.log("Data type of isMember is -->"+typeof isMember);

function displayUserProfile(name: string,age:number,active:boolean):void{
    console.log("User:"+name);
    console.log("Age:"+age);
    let Status:string=(active)?"Active":"Inactive"
    console.log("Status:"+Status);
}
displayUserProfile(userName,userAge,isMember);