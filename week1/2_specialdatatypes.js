"use strict";
let flexibleValue = 10;
flexibleValue = "Now I am a String";
flexibleValue = true;
let mysteryValue = "Hello World";
if (typeof mysteryValue == "string") {
    console.log("length of mysteryValue is" + mysteryValue.length);
}
function LogNotification(message) {
    console.log("Alert! " + message);
}
LogNotification("Environment setup successfull");
