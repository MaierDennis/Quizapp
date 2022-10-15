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
    
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection){
    if(selection == questions[currentQuestion]['righ_answer']){
        alert("richtig");
    }
}