
import { playGame, rounds, getRandomNumber } from '../src/index.js';
const gameTask = 'What is the result of the expression?';

const calculateAnswer = () => {
   let correctAnswer = 0;
    switch (operator) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;
        default: undefined;
    }
return correctAnswer;
}; 

const askQuestion = () => {
    const num1 = getRandomNumber (0, 100);
    const num2 = getRandomNumber (0, 100);
    const operators = ['+', '-', '*'];
    const randomIndex = getRandomNumber (0, operators.length);
    const operator = operators[randomIndex];
    const question = `${num1} ${operator} ${num2}`;
    return question;
};



playGame (gameTask, question, correctAnswer);

export {gameTask, question, correctAnswer}; 