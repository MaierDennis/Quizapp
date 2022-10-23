let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wer hat Ricola erfunden?",
        "answer_1": "Deutschland",
        "answer_2": "Die Schweiz",
        "answer_3": "Österreich",
        "answer_4": "Singapur",
        "right_answer": 2
    },
    {
        "question": "Liegt Tengen vor, hinter oder neben dem Berg?",
        "answer_1": "Vor",
        "answer_2": "Hinter",
        "answer_3": "Rechts daneben",
        "answer_4": "Links daneben",
        "right_answer": 1
    },
    {
        "question": "Welche Automarke übertrifft alle anderen?",
        "answer_1": "BMW",
        "answer_2": "VW",
        "answer_3": "Mercedes",
        "answer_4": "Audi",
        "right_answer": 4
    },
    {
        "question": "Wie ist das Wetter am Mittwoch?",
        "answer_1": "Klar",
        "answer_2": "Bewölkt",
        "answer_3": "Regen",
        "answer_4": "Woher soll ich das wissen?",
        "right_answer": 4
    },
    {
        "question": "Wer schimpft sich Idiot?",
        "answer_1": "Andre",
        "answer_2": "Jonas",
        "answer_3": "Frieder",
        "answer_4": "Alle davon",
        "right_answer": 4
    },
    {
        "question": "Wo liegt Miramundo",
        "answer_1": "Iran",
        "answer_2": "Guatemala",
        "answer_3": "Kasachstan",
        "answer_4": "Neuseeland",
        "right_answer": 2
    },
    {
        "question": "wie viel Ar sind ein Hektar?",
        "answer_1": "10",
        "answer_2": "100",
        "answer_3": "10000",
        "answer_4": "100000",
        "right_answer": 2
    }

];


let currentQuestion = 0;
let correctAnswers = 0;

function init() {
    document.getElementById('numberOfQuestions').innerHTML = questions.length;

    showQuestions();
}

function showQuestions() {

    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none;';
        document.getElementById('correctAnswers').innerHTML = correctAnswers;
        document.getElementById('allAnswers').innerHTML = questions.length;
    }
    else {
        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);
        console.log(percent);
        document.getElementById('progressBar').innerHTML = `${percent}%`
        document.getElementById('progressBar').style.width = `${percent}%`

        let question = questions[currentQuestion];

        document.getElementById('numberCurrentQuestion').innerHTML = currentQuestion + 1;

        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).classList.add('bg-success');
        correctAnswers++;
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