import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const runBrainCalcGame = () => {
  const rulesOfCurrentGame = 'What is the result of the expression?';

  const generateRound = () => {
    const firstRandomNumber = getRandomInRange(1, 100);
    const secondRandomNumber = getRandomInRange(1, 100);
    const randomOperator = getRandomInRange(1, 3);
    let question;
    let correctAnswer;

    switch (randomOperator) {
      case 1:
        question = `${firstRandomNumber} + ${secondRandomNumber}`;
        correctAnswer = firstRandomNumber + secondRandomNumber;
        break;
      case 2:
        question = `${firstRandomNumber} - ${secondRandomNumber}`;
        correctAnswer = firstRandomNumber - secondRandomNumber;
        break;
      case 3:
        question = `${firstRandomNumber} * ${secondRandomNumber}`;
        correctAnswer = firstRandomNumber * secondRandomNumber;
        break;
      default:
        break;
    }

    return [question, String(correctAnswer)];
  };

  runEngine(rulesOfCurrentGame, generateRound);
};

export default runBrainCalcGame;
