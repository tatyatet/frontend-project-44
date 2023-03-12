import readlineSync from 'readline-sync';

let correctAnswer;
const rounds = 3;

const isEven = (number) => {
    if (number % 2 === 0) {
        correctAnswer = 'yes';
    } else {
        correctAnswer = 'no';
    }
};

export const brainEven = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello ${userName}!`);
    console.log ('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 1; i <= rounds;) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log (`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: '); 
    isEven (randomNumber);
    if (userAnswer !== correctAnswer) {
        i = 1;
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'`);
        console.log("Let's try again");  
    } else {
        i += 1;
       console.log('Correct!'); 
    }
}
console.log(`Congratulations! ${userName}!`);
};
