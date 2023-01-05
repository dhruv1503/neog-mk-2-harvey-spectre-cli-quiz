const readlineSync = require("readline-sync");
const chalk = require("chalk");

/** 
Scope of Project 
HARVEY SPECTRE QUIZ
-10 questions multiple choice about him
-use chalk to beautify CLI
- use a welcome message based on name
- send a score evaluation message based on score
-show score 
*/


// details about trivia
const triviaName = "Havey Spectre"

// List of questions
const questionsList = [
  {
    question: "Harvey worked at which firm?",
    options: ["Pearson and Hardman", "Specter and Litt", "Paulson and Specter", "Hardman and Litt"],
    correctAnswer: "Pearson and Hardman"
  },
  {
    question: "Who is the mentor of Harvey?",
    options: ["Dauna Paulson", "Jessica Pearson", "Mike Ross", "Robert Zane"],
    correctAnswer: "Jessica Pearson"
  },
  {
    question: "The doctor he dated was?",
    options: ["Dauna Paulson", "Rachael Zane", "Paula Agard", "Dana Scott"],
    correctAnswer: "Paula Agard"
  },
  {
    question: "Why did he start hating his mother?",
    options: ["She didn't love him", "He finds out his mother is cheating on his father", "She left him", "She always belittled him"],
    correctAnswer: "He finds out his mother is cheating on his father"
  },
  {
    question: "Where did he worked before Pearson Hardman?",
    options: ["State Justice department", "County attorney", "Office of the district attorney", "New York Justice Department"],
    correctAnswer: "Office of the district attorney"
  },
  {
    question: "From which university did he get his law degree?",
    options: ["Stanford university", "Harvard University", "Oxford University", "Chicago University"],
    correctAnswer: "Harvard University"
  },
  {
    question: "His younger brother's name is?",
    options: ["Marcus Specter", "Mike Specter", "Kevin Specter", "Robert Specter"],
    correctAnswer: "Marcus Specter"
  },
  {
    question: " What Is Harvey's Drink Of Choice?",
    options: ["Whiskey", "Gin", "Vodka", "Cognac"],
    correctAnswer: "Whiskey"
  },
  {
    question: "What Is The Name Of Harvey's Chauffeur?",
    options: ["Rahim", "Ali", "Rahman", "Arham"],
    correctAnswer: "Rahman"
  },
  {
    question: "What is Harvey's full name?",
    options: ["Harvey Reginald Specter", "Harvey Specter", "Harvey Ronald Specter", "Harvey Lehman Specter"],
    correctAnswer: "Harvey Reginald Specter"
  },
]

// Welcome function
function welcomeParticipant() {
  const name = readlineSync.question("What is your name ? ");
  console.log(chalk.bold.bgYellow(`Hello ${name}, Welcome to ${triviaName} TRIVIA !!!!`));
}

// Result remarks 
const scoreRemarks = (score) => {
  if (score <= 4) {
    console.log(chalk.bold.bgYellow(`Do you even know who ${triviaName} is?`))
  }
  else if (score > 4 && score < 6) {
    console.log(chalk.bold.bgYellow(`You need to know more about ${triviaName}.`))
  }
  else {
    console.log(chalk.bold.bgYellow(`You are a true ${triviaName} Fan.`))
  }
}

// question check function
const checkMultipleChoiceAnswers = (question, options, correctAnswer) => {
  const index = readlineSync.keyInSelect(options, question);

  console.log("Your selected answer: ", options[index]);

  if (options[index] == correctAnswer) {
    console.log(chalk.bgGreen("YAYY!!, Your answer is right"));
    return true;
  }
  else {
    console.log(chalk.bgRed(" Oh nooo!!!, You selcted wrong option"));
    console.log(chalk.bold.green("Correct Answer was", correctAnswer));
    return false;
  }
}

// Start quiz
// 
let score = 0;
const quiz = (questions) => {
  // Welcome the participant
  welcomeParticipant();
  // quiz logic
  questions.forEach((question) => {
    if (checkMultipleChoiceAnswers(question.question, question.options, question.correctAnswer)) {
      score += 1;
    }

    console.log("Total score : ", score)
  })
  console.log(chalk.inverse("Your final score is ", score));
  // Review the paricipant
  scoreRemarks(score);
}



quiz(questionsList)