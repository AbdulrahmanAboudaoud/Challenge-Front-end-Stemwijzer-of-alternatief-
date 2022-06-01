var startbutton = document.getElementById("start");
var subject = document.getElementById("onderwerp");
var statments = document.getElementById("stelling");
var nav = document.getElementById("navbar");
var infobuttons = document.getElementById("extrainfobuttons");
var infotext = document.getElementById("extrainfotext");
var answers = document.getElementById("answers");
var agree = document.getElementById("agree");
var none = document.getElementById("none");
var disagree = document.getElementById("disagree");
var skip = document.getElementById("skip");
var backbutton = document.getElementById("backbutton");

var choices = [];
var count = 0;

startbutton.addEventListener("click",startFunction);
backbutton.addEventListener("click",backbuttonFunction);

function startFunction(){
    nav.style.display = "block";
    infobuttons.style.display = "block";
    answers.style.visibility = "visible";
    startbutton.style.display = "none";
    document.body.style.backgroundImage = "none";
    getStatment();
    
}

function backbuttonFunction(){
   
    if (count  == 0 ){
        nav.style.display = "none";
        infobuttons.style.display = "none";
        answers.style.visibility = "hidden";
        startbutton.style.display = "block";
        document.body.style.backgroundImage = "url('bgimage.png')";
        subject.innerHTML = "STEM WIJZER";
        statments.innerHTML = "Tweede Kamerverkiezingen 2022";

    }
    else{
        count--
        getStatment();
    }





}

function agreeFunction(){
    choices[count]="pro";
    count++
    getStatment();
    
}
function noneFunction(){
    choices[count]="GVB";
    count++
    getStatment();

}
function disagreeFunction(){
    choices.push("contra");
    count++
    getStatment();
}
function skipFunction(){
    choices.push("skip");
    count++
    getStatment();
}






function getStatment(){
    subject.innerHTML = subjects[count].title;
    statments.innerHTML = subjects[count].statement;
    console.log(count);
    console.log(choices);
}

