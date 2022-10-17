let questions = [
{
    "question" : "Wer hat HTML erfunden?",
    "answer_1" : "Robbie Williams",
    "answer_2" : "Lady Gaga",
    "answer_3" : "Tim Berners-Lee",
    "answer_4" : "Justin Bieber", 
    "righ_answer" : 3
},
{
    "question" : "Wer hats erfunden?",
    "answer_1" : "Deutschland",
    "answer_2" : "Die Schweiz",
    "answer_3" : "Österreich",
    "answer_4" : "Singapur", 
    "righ_answer" : 3
},
{
    "question" : "Wer hat HTML erfunden?",
    "answer_1" : "Robbie Williams",
    "answer_2" : "Lady Gaga",
    "answer_3" : "Tim Berners-Lee",
    "answer_4" : "Justin Bieber", 
    "righ_answer" : 3
},
{
    "question" : "Wer hat HTML erfunden?",
    "answer_1" : "Robbie Williams",
    "answer_2" : "Lady Gaga",
    "answer_3" : "Tim Berners-Lee",
    "answer_4" : "Justin Bieber", 
    "righ_answer" : 3
},
{
    "question" : "Wer hat HTML erfunden?",
    "answer_1" : "Robbie Williams",
    "answer_2" : "Lady Gaga",
    "answer_3" : "Tim Berners-Lee",
    "answer_4" : "Justin Bieber", 
    "righ_answer" : 3
},
{
    "question" : "Wer hat HTML erfunden?",
    "answer_1" : "Robbie Williams",
    "answer_2" : "Lady Gaga",
    "answer_3" : "Tim Berners-Lee",
    "answer_4" : "Justin Bieber", 
    "righ_answer" : 3
},
{
    "question" : "Wer hat HTML erfunden?",
    "answer_1" : "Robbie Williams",
    "answer_2" : "Lady Gaga",
    "answer_3" : "Tim Berners-Lee",
    "answer_4" : "Justin Bieber", 
    "righ_answer" : 3
},
{
    "question" : "Wer hat HTML erfunden?",
    "answer_1" : "Robbie Williams",
    "answer_2" : "Lady Gaga",
    "answer_3" : "Tim Berners-Lee",
    "answer_4" : "Justin Bieber", 
    "righ_answer" : 3
}

];


let currentQuestion = 0;

function init() {
    document.getElementById('numberOfQuestions').innerHTML = questions.length;

    showQuestions();
}

function showQuestions() {
    let question = questions[currentQuestion];

    document.getElementById('numberCurrentQuestion').innerHTML = currentQuestion + 1;
    
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['righ_answer']}`;

    if(selectedQuestionNumber == question['righ_answer']){
        document.getElementById(selection).classList.add('bg-success');
    }
    else {  
        document.getElementById(selection).classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestions();
}

function resetAnswerButtons(){
    
        document.getElementById('answer_1').classList.remove('bg-danger');
        document.getElementById('answer_1').classList.remove('bg-success');
        document.getElementById('answer_2').classList.remove('bg-danger');
        document.getElementById('answer_2').classList.remove('bg-success');
        document.getElementById('answer_3').classList.remove('bg-danger');
        document.getElementById('answer_3').classList.remove('bg-success');
        document.getElementById('answer_4').classList.remove('bg-danger');
        document.getElementById('answer_4').classList.remove('bg-success');
    
}