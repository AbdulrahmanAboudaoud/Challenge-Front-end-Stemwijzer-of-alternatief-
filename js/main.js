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
var nextButton = document.getElementById("next");
var checkboxdiv = document.getElementById("checkboxdiv");
var submitButton = document.getElementById("submit");
var partiesFilter = document.getElementById("partiesFilter");
var choices = [];
var count = 0;
var width = 0;
var topicsChecked = 0;
var CheckAll = document.getElementById("CheckAll");
var CheckSecond = document.getElementById("CheckSecond");

submitButton.addEventListener("click",amountPartiesChecker);
startbutton.addEventListener("click",startFunction);
backbutton.addEventListener("click",backbuttonFunction);
nextButton.addEventListener ("click",importantPartties);


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
    resetColor();
   
    
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
        
        if(choices[count]== "pro"){
            resetColor();
            agree.style.backgroundColor="blue"
        }
        else if(choices[count]== "contra"){
            resetColor();
            disagree.style.backgroundColor="blue"
        }
        else if(choices[count]== "GVB"){
            resetColor();
            none.style.backgroundColor="blue"
        }
        else if(choices[count]=="skip"){
            resetColor();
            skip.style.backgroundColor="blue"
        }
       
        
    }





}

function resetColor(){
    agree.style.backgroundColor="green";
    disagree.style.backgroundColor="red";
    none.style.backgroundColor="grey";
    skip.style.backgroundColor="white";
}

function agreeFunction(){
    resetColor();
    choices[count]="pro";
    count++
    getStatment();
    progress(3.125);
    resetColor();
    
    
    
}
function noneFunction(){
    resetColor();
    choices[count]="GVB";
    count++
    getStatment();
    progress(3.125);
    
    
    

}
function disagreeFunction(){
    resetColor();
    choices[count]="contra";
    count++
    getStatment();
    progress(3.125);
    
    
}
function skipFunction(){
    resetColor();
    choices[count]="skip";
    count++
    getStatment();
    progress(3.125);
    
    
}

function createChekboxElement(arr){
          
    for (var option of arr){
            var checboxName = (option.name == null)?option.title:option.name;  
      
            var div = document.createElement('div');
            div.classList.add ("div5");
            var checkbox = document.createElement('input');
            checkbox.type ="checkbox";
            checkbox.name ="cb";
            checkbox.value = checboxName;
            checkbox.id = checboxName;
           
            var label = document.createElement('label');
            label.htmlFor = checboxName;    
            text = document.createTextNode(checboxName);
            label.appendChild(text);
            div.appendChild(checkbox);
            div.appendChild(label);   
            checkboxdiv.appendChild(div);
        }
        
        
}
var importantTopicsArray = [];
var checkBoxValue = document.getElementsByName('cb');


/*
function checkAll(myCheckbox){
    if(myCheckbox.checked == true){
        checkBoxValue.forEach(function(checkbox){
            var d = checkbox.value;
            checkbox.checked = true;
            importantPartiesArray.push(d);
        });
    }

    else{
        checkBoxValue.forEach(function(checkbox){
            checkbox.checked = false;
            importantPartiesArray = [];

        });
    }
  
    console.log(importantPartiesArray);
}

*/
function checkAll(myCheckbox){
    if(myCheckbox.checked == true){
        checkBoxValue.forEach(function(checkbox){
            var d = checkbox.value;
            for(var i=0; i<parties.length; i++){
            if (parties[i].secular == true && parties[i].name == d ){
            checkbox.checked = true;
            importantPartiesArray.push(d);
        }
    } });

    }

    else{
        checkBoxValue.forEach(function(checkbox){
            
            var d = checkbox.value;
            for(var i=0; i<parties.length; i++){
            if (parties[i].size !== true && parties[i].name == d ){
            checkbox.checked = false;
            importantPartiesArray = [];
        }
    }

        });
    }
    console.log(importantPartiesArray);
}




function checkSecond(myCheckbox){
    if(myCheckbox.checked == true){
        checkBoxValue.forEach(function(checkbox){
            var d = checkbox.value;
            for(var i=0; i<parties.length; i++){
            if (parties[i].size > 15 && parties[i].name == d ){
            checkbox.checked = true;
            importantPartiesArray.push(d);
        }
    } });

    }

    else{
        checkBoxValue.forEach(function(checkbox){
            
            var d = checkbox.value;
            for(var i=0; i<parties.length; i++){
            if (parties[i].size > 15 && parties[i].name == d ){
            checkbox.checked = false;
            importantPartiesArray = [];
        }
    }

        });
    }
    console.log(importantPartiesArray);
}



function checkTopics(){

for (var box of checkBoxValue){
    
    box.addEventListener('click', function(){
        var s = this.value;
        if(this.checked == true){
            importantTopicsArray.push(this.value);
            console.log(topicsChecked);
            topicsChecked++;
            statments.innerHTML = topicsChecked +"/30 stellingen geselecteerd";
        }
        else{
         var index = importantTopicsArray.indexOf(s);
         if (index > -1){
            importantTopicsArray.splice(index, 1);
         }
        }
        console.log(importantTopicsArray);
})

}


console.log(checkBoxValue);


}




function importantTopics(){

    CheckAll.checked = false;
    CheckSecond.checked = false;

    nav.style.display = "none";
    infobuttons.style.display = "none";
    answers.style.visibility = "hidden";
    startbutton.style.display = "none";
    nextButton.style.display = "block";
    subject.innerHTML = "Zijn er onderwerpen die je extra belangrijk vindt ?";
    statments.innerHTML = "";
    createChekboxElement(subjects);
    checkTopics();

}

var importantPartiesArray = [];

function checkParties(){
var checkBoxValue = document.getElementsByName('cb');
for (var box of checkBoxValue){
    box.addEventListener('click', function(){
        var s = this.value;
        if(this.checked == true){
            importantPartiesArray.push(this.value);
        }
        else{
         var index = importantPartiesArray.indexOf(s);
         if (index > -1){
            importantPartiesArray.splice(index, 1);
         }
        }
        console.log(importantPartiesArray);
})
}

console.log(checkBoxValue);


}




function importantPartties(){
    nextButton.style.display = "none";
    checkboxdiv.innerHTML="";
    subject.innerHTML = "Welke partijen wil je meenemen in het resultaat ?";
    statments.innerHTML = "kies alle partijen, allen de partijen die nu in de tweede kamer zitten, of maak zelf een selectie,slecteer minimaal 3 partijen";
    checkboxdiv.style.top = "300px";
    createChekboxElement(parties);
    submitButton.style.display = "block";
    partiesFilter.style.display = "block";
    checkParties();


}


function amountPartiesChecker(){
if(importantPartiesArray.length < 3){
    alert('je moet minimaal 3 partijen kiezen !');
}
else{
    showResult();
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
    console.log(choices);
}
    
   
    
}

function showResult(){
    subject.innerHTML = "";
    statments.innerHTML = "";
    checkboxdiv.style.display = "none";
    submitButton.style.display = "none";
    partiesFilter.style.display = "none";

    for (var party of parties){
        party.score = 0;
    }

    for (var i = 0; i < subjects.length; i++){
        for (var s = 0; s < subjects[i].parties.length; s++){
            if (subjects[i].parties[s].position == choices[i] ){

                const party = parties.find(element => element.name == subjects[i].parties[s].name)
               
                if( importantTopicsArray.includes(subjects[i].title)){
                party.score +=2;
               } 
               else{
                party.score++;
               }
            }
                 
               
            }
            parties.sort(function (party1,party2) {return party2.score - party1.score;});
            }
            console.log(choices);    
            console.dir(parties);


            for (var party of parties){
                progresline.style.display = "none";
                div1.style.height = "auto";
                var resultDiv = document.createElement('div');
                resultDiv.classList.add("result");
                var h2 = document.createElement('h2');
                resultDiv.appendChild(h2);
                h2.style.display = "inline-block";
                div1.appendChild(resultDiv);
                var amount =  filterResult(choices);
                var procent = (party.score/amount)*100;
                var procentFixed = Number.parseFloat(procent).toFixed(2);
                
                var scoreBarContainer = document.createElement('div');
                scoreBarContainer.style.height = "25px";
                scoreBarContainer.style.width = "300px";
                scoreBarContainer.style.backgroundColor = "gray";
                resultDiv.appendChild(scoreBarContainer);
                var scoreBar = document.createElement('div');
                scoreBar.style.height= "25px";
                scoreBar.style.width = procent+"%";
                scoreBar.style.backgroundColor = "green";
                scoreBarContainer.appendChild(scoreBar);
                scoreBarContainer.style.display= "inline-block";
                scoreBarContainer.classList.add ("resultBar"); 
                scoreBar.classList.add ("resultBar2"); 

                
              

                h2.innerHTML =  party.name + "-" + "" + " Procent : " + "" + procentFixed + "%";
               
                console.log(importantPartiesArray);


            };
        
            
        }
        
     
        
        function filterResult(choices){
            const result = choices.filter(choice => choice !== "skip")
            

            const result2 = choices.filter((choice,index) => {
            if(choice !== "skip"){
                var title = subjects[index].title;
                if( importantTopicsArray.includes(title)){ 
                 return true;
                }
                else {
                 return false;
                }
               
            }
        
        
                            }
            );
           

           var  totaalScore = result.length + result2.length;
           return totaalScore;
        }
    
        




