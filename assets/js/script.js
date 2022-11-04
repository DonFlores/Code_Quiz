var startButton = document.querySelector("startBtn")
var startEl = document.querySelector("#start")
var questionsEl = document.querySelector("#questions")
var questionTitle = document.querySelector("#question-title")
var choicesEl = document.querySelector("#choices")
var currentQuestion = 0

var questions = [
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ['terminal / bash', 'console.log', 'JavaScript', 'for loops'],
        answer: 'console.log'
    },
    {
        question: "Commonly used data types DO NOT include:",
        choices: ['booleans', 'alerts', 'numbers', 'strings'],
        answer: 'alerts',
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ['curly brackets', 'quotes', 'parenthesis', 'commas'],
        answer: 'quotes',
    },
    {
        question: "The condition in an if / else statement is enclosed within _____.",
        choices: ['parenthesis', 'curly brackets', 'quotes', 'square brackets'],
        answer: 'parenthesis',
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ['booleans', 'other arrays', 'numbers and strings', 'all of the above'],
        answer: 'all of the above'
    },
];