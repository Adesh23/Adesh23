  let option_list = document.querySelector(".option_list");
  let timeLine = document.querySelector(".time_line");
  let nxt_btn = document.querySelector(".nxt_btn");
  let red = document.getElementById("shy");
  let sec = document.getElementById("sectimer");
  let start_btn = document.getElementById("INFO");
  let counter;
  let timeValue=15;
  let widthValue=0;
  let resultBox=document.querySelector(".result_box");
  let restart_quiz=document.querySelector(".restart");
  let quit_quiz=document.querySelector(".quit");
 
 
//on clicking start button
function myFunction() {
  start_btn.classList.add("activeInfo");
}

//on clicking quit function
function quit(){
  start_btn.classList.remove("activeInfo");
}
let bottom_count=1;
//on clicking continue button
function cont() {
  red.classList.add("activeQuiz");
startTimer(15);
showquestion(0);
queCounter(1);
startTimerline(0);
}


let userScore=0;
let que_count = 0;
//on clicking next button
 function nxt(){
  if(que_count < question.length -1) {
  que_count++;
  bottom_count++;
  showquestion(que_count);
  queCounter(bottom_count);
  clearInterval(counter);
  startTimer(timeValue);
clearInterval(counterline);
startTimerline(widthValue);
nxt_btn.style.display="none";  
  } 
  else{
    console.log("questions completed");
    showResult();
  }
 }
 
//getting questions form question array
function showquestion(index) {
  let que_text = document.querySelector(".que_text");
  let que_tag = "<span>" +question[index].numb+`.` + question[index].question + "</span>";
   let option_tag= `<div class="option">`+ question[index]                       .options[0] +`<span></span></div>`
                  + `<div class="option">`+ question[index].options[1] +`<span></span></div>` 
                  + `<div class="option">`+ question[index].options[2] +`<span></span></div>`
                  + `<div class="option">`+ question[index].options[3] +`<span></span></div>` 
   ;
  que_text.innerHTML = que_tag;
option_list.innerHTML=option_tag;

const option= option_list.querySelectorAll(".option");
for (var i = 0; i < option.length; i++) {
  option[i].setAttribute("onclick","optionSelected(this)")
}
}
function optionSelected(answer){
  clearInterval(counter);
  clearInterval(counterline);
  let userAns=answer.textContent;
  let correctAns=question[que_count].answer;
  let alloptions=option_list.children.length;
  if(userAns==correctAns){
    userScore +=1;
    answer.classList.add("correct");
     console.log("your answer is correct")
  }
  else{
    answer.classList.add("Incorrect");
    console.log("Your answer is incorrect")
    //if answer is wrong automatically select the write answer
    for ( i = 0; i < alloptions; i++){
      if(option_list.children[i].textContent==correctAns){
        option_list.children[i].setAttribute("class","option correct")
      }
    }
    
  }
  
  //if answer is selected disable all options
  for ( i = 0; i < alloptions; i++){
    option_list.children[i].classList.add('disable')
  }
  nxt_btn.style.display="block";
  
}

function queCounter(index){
  let total_queCount=document.getElementById("total_queDiv");
  let totalQueTag="<span><p>" +index+"</p>of<p>" + question.length+ "</p>question</span>";
  total_queCount.innerHTML=totalQueTag;
};

function showResult(){
red.classList.remove("activeQuiz");
resultBox.classList.add("result_active");
start_btn.classList.remove("activeInfo");
const scoreText=document.querySelector(".score_text");
if(userScore>3){
let scoreTag=`<span>and Congrats! you got <p>` + userScore+ `</p> out of <p> ` + question.length + `</p></span>`;
scoreText.innerHTML=scoreTag;
}
else if(userScore>1){
let scoreTag=`<span>and Nice you got <p>` + userScore+ `</p> out of <p> ` + question.length + `</p></span>`;
scoreText.innerHTML=scoreTag;
}
else{
let scoreTag=`<span> and sorry! You have got <p>` + userScore+ `</p> out of <p> ` + question.length + `</p></span>`;
scoreText.innerHTML=scoreTag;
}
}



function startTimer(time){
  counter=setInterval(timer,1000)
  function timer(){
    sec.textContent=time;
    time--;
    if(time<0){
      clearInterval(counter);
      sec.textContent="0";
    }
  }
}

function startTimerline(time) {
  counterline = setInterval(timer, 29)
  function timer() {
    time+=1;
   timeLine.style.width=time+"px";
    if(time>587){
      clearInterval(counterline);
    }
  }
}
//On clicking the quit button on the result box
function quit_Quiz(){
  window.location.reload();
}

//on clicking the restart button
function restart(){
  start_btn.classList.add("activeInfo");
  resultBox.classList.remove("result_active");
/*  let userScore=0;
let que_count = 0;
let timeValue=15;
let widthValue=0;
 showquestion(que_count);
 queCounter(bottom_count);
 clearInterval(counter);
 startTimer(timeValue);
 clearInterval(counterline);
 startTimerline(widthValue);
nxt_btn.style.display="none";*/
}















