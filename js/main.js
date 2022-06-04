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
var counter = document.getElementById("counter");
var div1 = document.getElementById("div1");

var choices = [];
var count = 0;
var width = 0;

startbutton.addEventListener("click",startFunction);
backbutton.addEventListener("click",backbuttonFunction);

function progress(value){
var progresline = document.getElementById("progresline");
width = width+value;
progresline.style.width = (width  ) + "%";


}


function startFunction(){
    
    nav.style.display = "block";
    infobuttons.style.display = "block";
    answers.style.visibility = "visible";
    startbutton.style.display = "none";
    document.body.style.backgroundImage = "none";
    getStatment();
    progress(0);
   
    
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
        progress(-3.125);
        
    }





}

function agreeFunction(){
    choices[count]="pro";
    count++
    getStatment();
    progress(3.125);
    
    
}
function noneFunction(){
    choices[count]="GVB";
    count++
    getStatment();
    progress(3.125);
    

}
function disagreeFunction(){
    choices.push("contra");
    count++
    getStatment();
    progress(3.125);
    
}
function skipFunction(){
    choices.push("skip");
    count++
    getStatment();
    progress(3.125);
    
}

function importantTopics(){

    nav.style.display = "none";
    infobuttons.style.display = "none";
    answers.style.visibility = "hidden";
    startbutton.style.display = "none";
    div1.style.height = "650px";
    subject.innerHTML = "Zijn er onderwerpen die je extra belangrijk vindt ?";
    statments.innerHTML = "0/30 stellingen geselecteerd";
    createChekbox();

}

function createChekbox(){
   for(var r =0; r<= 9; r++){
   
    for(var i=0; i< subjects.length; i++){

       
        
        var div = document.createElement('div');
        div.classList.add ("div5");

        var checkbox = document.createElement('input');
        checkbox.type ="checkbox";
        checkbox.name ="name";
        checkbox.value = "true";
        checkbox.id = i;
        var label = document.createElement('label');
        label.htmlFor = i;
        label.appendChild(document.createTextNode(subjects[i].title));
        
        div.appendChild(checkbox);
        div.appendChild(label);   
        div1.appendChild(div); 
        
        console.log(subjects[i].title);
        
}
}
}




function getStatment(){

    if(count == subjects.length){
        
        importantTopics();


    }
    else{
    subject.innerHTML = subjects[count].title;
    statments.innerHTML = subjects[count].statement;
    counter.innerHTML = count+1 +"/30";
}
    
   
    
}


