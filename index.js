const userName = prompt("What is your name?");
alert(`Welcome to the pop quiz, ${userName}!`);

let score = 0;

const selectionInput = prompt(`Question 1: What is 2 + 2?
    [1] 3
    [2] 4
    [3] 5`);

if (selectionInput === "4") {
  score++;
} else if (selectionInput === "3" || selectionInput === "5") {
  score--;
}

const selectionInput2 = prompt(`Question 2: What is 10 - 4?
    [1] 6
    [2] 7
    [3] 8`);

if (selectionInput2 === "6") {
  score++;
} else if (selectionInput2 === "7" || selectionInput2 === "8") {
  score--;
}

const selectionInput3 = prompt(`Question 3: What is 3 * 3?
    [1] 6
    [2] 9
    [3] 12`);

if (selectionInput3 === "9") {
  score++;
} else if (selectionInput3 === "6" || selectionInput3 === "12") {
  score--;
}
const selectionInput4 = prompt(`Question 4: Is Spongebob a goofy goober?
    [1] Yes
    [2] No`);
if (selectionInput4 === "Yes") {
  score++;
} else if (selectionInput4 === "No") {
  score--;
}

prompt(`Your final score is ${score} out of 4.`);
alert (`The user answered 0 questions correctly.`);
if (score === 0)

alert (`The user answered all questions correctly.`);
else if (score === 4)
    
alert (`The user answered some questions correctly.`);
else if (score === 1 || score === 2 || score === 3)
