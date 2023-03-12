import readlineSync from 'readline-sync';
const rounds = 3;
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);


const playGame = (gameTask, question, correctAnswer) => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello ${userName}!`);
    console.log (gameTask);
    askQuestion ();
    console.log (`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: '); 
    for (let i = 1; i <= rounds;) {
        calculateAnswer ();
        if (userAnswer !== correctAnswer) {
            i = 0;
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'`);
             console.log("Let's try again");  

} else {
    i += 1;
   console.log('Correct!'); 
}
}
console.log(`Congratulations! ${userName}!`);
};

export { playGame, getRandomNumber };


