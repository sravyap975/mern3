let flexibleValue:any=10;
flexibleValue="Now I am a String";
flexibleValue=true;


let mysteryValue:unknown="Hello World";
if(typeof mysteryValue=="string"){
    console.log("length of mysteryValue is"+mysteryValue.length);
}

function LogNotification(message:string):void{
    console.log("Alert! "+message);
}

LogNotification("Environment setup successfull");
