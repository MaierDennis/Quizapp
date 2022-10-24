let questions = [
    {
        "question": "Who invented HTML?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Which HTML element describes the largest heading?",
        "answer_1": "heading",
        "answer_2": "head",
        "answer_3": "h1",
        "answer_4": "h6",
        "right_answer": 3
    },
    {
        "question": "Which input type defines a slider control?",
        "answer_1": "controls",
        "answer_2": "range",
        "answer_3": "slider",
        "answer_4": "search",
        "right_answer": 2
    },
    {
        "question": "How can you make a numbered list?",
        "answer_1": "ul",
        "answer_2": "ol",
        "answer_3": "list",
        "answer_4": "dl",
        "right_answer": 2
    },
    {
        "question": "How can you make a bulleted list?",
        "answer_1": "ul",
        "answer_2": "ol",
        "answer_3": "list",
        "answer_4": "dl",
        "right_answer": 1
    },
    {
        "question": "Which HTML element is used to specify a header for a document or section?",
        "answer_1": "section",
        "answer_2": "header",
        "answer_3": "top",
        "answer_4": "head",
        "right_answer": 2
    },
    {
        "question": "Which HTML attribute replaces an image, if not available?",
        "answer_1": "longdesc",
        "answer_2": "alt",
        "answer_3": "title",
        "answer_4": "src",
        "right_answer": 2
    },
    {
        "question": "In HTML, which attribute is used to specify that an input field must be filled out?",
        "answer_1": "required",
        "answer_2": "validate",
        "answer_3": "placeholder",
        "answer_4": "formvalidate",
        "right_answer": 1
    }

];


let currentQuestion = 0;
let correctAnswers = 0;
let AUDIO_SUCCESS = new Audio('audio/win.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');

function init() {
    document.getElementById('numberOfQuestions').innerHTML = questions.length;

    showQuestions();
}

function showQuestions() {

    if (gameIsOver()) {
        showEndScreen();
    }
    else {
        updateProgressBar();
        updateToNextQuestion();
    }
}

function gameIsOver(){
    return currentQuestion >= questions.length;
}

function showEndScreen() {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none;';
    document.getElementById('correctAnswers').innerHTML = correctAnswers;
    document.getElementById('allAnswers').innerHTML = questions.length;
}

function updateProgressBar(){
    let percent = (currentQuestion) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progressBar').innerHTML = `${percent}%`
    document.getElementById('progressBar').style.width = `${percent}%`
}

function updateToNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('numberCurrentQuestion').innerHTML = currentQuestion + 1;
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (rightAnswerSelected(selectedQuestionNumber, question)) {
        document.getElementById(selection).classList.add('bg-success');
        AUDIO_SUCCESS.play();
        correctAnswers++;
        
    }
    else {
        document.getElementById(selection).classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).classList.add('bg-success');
        AUDIO_FAIL.play();
        
    }
    document.getElementById('disableClick').classList.add('disable-click');
    document.getElementById('next-button').disabled = false;
}

 function rightAnswerSelected(selectedQuestionNumber, question){
    return selectedQuestionNumber == question['right_answer'];
 }

function nextQuestion() {
    currentQuestion++;
    document.getElementById('disableClick').classList.remove('disable-click');
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestions();
}

function resetAnswerButtons() {

    document.getElementById('answer_1').classList.remove('bg-danger');
    document.getElementById('answer_1').classList.remove('bg-success');
    document.getElementById('answer_2').classList.remove('bg-danger');
    document.getElementById('answer_2').classList.remove('bg-success');
    document.getElementById('answer_3').classList.remove('bg-danger');
    document.getElementById('answer_3').classList.remove('bg-success');
    document.getElementById('answer_4').classList.remove('bg-danger');
    document.getElementById('answer_4').classList.remove('bg-success');

}

function restartGame() {
    currentQuestion = 0;
    correctAnswers = 0;
    document.getElementById('endScreen').style = 'display: none;';
    document.getElementById('questionBody').style = '';
    init();
}

function backToMenu(){
    window.location = index.html;
}