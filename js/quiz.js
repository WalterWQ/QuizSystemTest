const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const countryButtons = document.getElementById('country-buttons')


let shuffledQuestions, currentQuestionIndex
var countrySelection
            
startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startQuiz() {
    startButton.classList.add('hide')
    countryButtons.classList.add('hide')
    if (countrySelection == 1) {
        shuffledQuestions = moscowQuestion.sort(() => Math.random() - .5)
    } else if (countrySelection == 2) {
        shuffledQuestions = usaQuestion.sort(() => Math.random() - .5)
    } else if (countrySelection == 3) {
        shuffledQuestions = ukQuestion.sort(() => Math.random() - .5)
    } else {
        shuffledQuestions = testQuestion.sort(() => Math.random() - .5)
    }
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

// I should find a more code effincent way to choose diffrent countrys

function moscowQuiz() {
    countrySelection = 1;
    startQuiz()
}

function usaQuiz() {
    countrySelection = 2;
    startQuiz()
}

function ukQuiz() {
    countrySelection = 3;
    startQuiz()
}

function testQuiz() {
    countrySelection = 4;
    startQuiz()
}

function selectCountry() {
    if (document.getElementById('country-btn').id == "Moscow") {
        console.log("Hello world!");
    }
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex+ 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
        nextButton.classList.add('hide')
    }
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const testQuestion = [
    {
        question: 'What is 2+2?',
        answers: [
            { text: '4', correct: true},
            { text: '22', correct: false}
        ]
    },
    {
        question: 'What is Russias capital',
        answers: [
            { text: 'India', correct: false },
            { text: 'New York', correct: false },
            { text: 'London', correct: false },
            { text: 'Moscow', correct: true }
        ]
    }
]

const moscowQuestion = [
    {
        question: 'What is 2+25?',
        answers: [
            { text: '4', correct: true},
            { text: '22', correct: false}
        ]
    },
    {
        question: 'What is Russias capital',
        answers: [
            { text: 'India', correct: false },
            { text: 'New York', correct: false },
            { text: 'London', correct: false },
            { text: 'Moscow', correct: true }
        ]
    }
]

const ukQuestion = [
    {
        question: 'What is 2+25?',
        answers: [
            { text: '4', correct: true},
            { text: '22', correct: false}
        ]
    },
    {
        question: 'What is Russias capital',
        answers: [
            { text: 'India', correct: false },
            { text: 'New York', correct: false },
            { text: 'London', correct: false },
            { text: 'Moscow', correct: true }
        ]
    }
]

const usaQuestion = [
    {
        question: 'What is 2+25?',
        answers: [
            { text: '4', correct: true},
            { text: '22', correct: false}
        ]
    },
    {
        question: 'What is Russias capital',
        answers: [
            { text: 'India', correct: false },
            { text: 'New York', correct: false },
            { text: 'London', correct: false },
            { text: 'Moscow', correct: true }
        ]
    }
]