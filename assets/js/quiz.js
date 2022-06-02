//Step 1. Once start button is clicked a timer starts and the introduction page becomes hidden and the question with answers are displayed
//Step 2. After selecting the answer button it will display/compare if the answer is correct or incorrect
//Step 3. If I answer a question incorrectly 15 seconds is taken away from the clock, then go to the next question
//Step 4. When all questions are answered or if time reaches 0, the quiz is over
//Step 5. Once the quiz is over, the remaining time will be your score. You will be able to enter your initials to save your score
//Step 6. Create a high score board to display score. Include a "clear high scores" button and "go back" button on this screen

const startRulesEl = document.getElementById('rules-box')
const startButton = document.getElementById('start-btn');
startButton.addEventListener("click", startQuiz)

let randomQuestion, currentQuestionIndex 

const questionElement = document.getElementById('question-location')
const answerButtonsEl = document.getElementById('answer-buttons')

 function startQuiz() {
   console.log("clicked Start Button")
   startButton.classList.add('hide')
   startRulesEl.classList.add('hide')
   questionElement.classList.remove('hide')
   answerButtonsEl.classList.remove('hide')
   randomQuestion = questions.sort(() => Math.random()- .5)
   currentQuestionIndex = 0
   nextQuesiton()
 };

function nextQuesiton() {
    resetState()
    displayQuestion(randomQuestion[currentQuestionIndex])
}


function displayQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', pickAns)
        answerButtonsEl.appendChild(button)
    })
}

function pickAns(e) {
    const selectedAnswer = e.target
}

function resetState() {
    while (answerButtonsEl.firstChild)
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
}
// function saveScore() {

// }

// function clearScoreList() {

// }

// function tryAgain() {

// }


const questions = [
    {
        question: 'What team won the first Superbowl?',
        answers: [
            { text: 'Green Bay Packers', correct: true},
            { text: 'Houston Oilers', correct: false},
            { text: 'Oakland Raiders', correct: false},
            { text: 'Kansas City Chiefs', correct: false}
        ]
    }
];