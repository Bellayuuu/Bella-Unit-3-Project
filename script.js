/* Declare variables below to save the different sections (divs) of your story*/

let GrabButton = document.querySelector(".option1");
let LeaveButton = document.querySelector(".option2");

let GrabDiv = document.querySelector(".option1screen");
let LeaveDiv = document.querySelector(".option2screen");

let Cuddlebutton = document.querySelector(".Cuddle");
let Playbutton = document.querySelector(".Play");

let WowDiv = document.querySelector(".option1end");
let YouDiv = document.querySelector(".option2end");

let body = document.querySelector("body");

GrabButton.onclick=function(){
    GrabDiv.style.display="block";
    body.style="background-color: #e64004";
};

LeaveButton.onclick=function(){
    LeaveDiv.style.display="block";
    body.style="background-color: #e64004";           
};

Cuddlebutton.onclick=function(){
    WowDiv.style.display="block";
    body.style="background-color: #e64004";
};

Playbutton.onclick=function(){
    YouDiv.style.display="block";
    body.style="background-color: #e64004";
};
