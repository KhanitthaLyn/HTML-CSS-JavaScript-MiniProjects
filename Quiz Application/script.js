const questionData = [
	{
	  question:"1.Who sucks all of the poison out of Luffy's body? ",
      a:"Handcock",
      b:"Nami",
      c:"Reiju",
      d:"Robin",
      correct:"c"
	},
    {
        question:"2.Who was the first marine Admiral to be shown in the series?",
        a:"Akainu",
        b:"Kaokiji",
        c:"Kizaru",
        d:"Morgany",
        correct:"d"
    },
    {
        question:"3.Who gave Shanks the scar on his eye? ",
        a:"Dragon",
        b:"Marshall D",
        c:"Akainu",
        d:"Himself",
        correct:"b"
    }
];

const questionEl=document.getElementById('question');
const answerEls=document.querySelectorAll('.answer');
const container = document.querySelector('.question-container');
const choiceA=document.getElementById('a-text');
const choiceB=document.getElementById('b-text');
const choiceC=document.getElementById('c-text');
const choiceD=document.getElementById('d-text');

const submitBtn=document.getElementById('submit');

let currentQuestion = 0;
let score=0;
loadQuestion();

function loadQuestion(){
    checkChoice();
    const currentQuizData = questionData[currentQuestion];
    questionEl.innerText=currentQuizData.question;
    choiceA.innerText=currentQuizData.a;
    choiceB.innerText=currentQuizData.b;
    choiceC.innerText=currentQuizData.c;
    choiceD.innerText=currentQuizData.d;
}

function checkChoice(){
    answerEls.forEach(answerEl=>answerEl.checked=false);
}

submitBtn.addEventListener('click',()=>{

    let answer = getChoiceAnswer();
    if(answer){
        if(answer === questionData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;
        if(currentQuestion<questionData.length){
            loadQuestion();
        }else{
            container.innerHTML=`<h2>your score ${score}/${questionData.length}</h2>`;
        }
    }
});

function getChoiceAnswer(){
    let answer;
    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}