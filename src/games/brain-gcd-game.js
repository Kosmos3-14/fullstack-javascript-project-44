import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const runBrainGcdGame = () => {
  const rulesOfCurrentGame = 'Find the greatest common divisor of given numbers.';

  const generateRound = () => {
    const firstNumber = getRandomInRange(1, 100);
    const secondNumber = getRandomInRange(1, 100);

    const question = `${firstNumber} ${secondNumber}`;

    const getGcd = (first, second) => {
      if (second === 0) {
        return first;
      }
      return getGcd(second, first % second);
    };

    const correctAnswer = getGcd(firstNumber, secondNumber).toString();

    return [question, correctAnswer];
  };

  runEngine(rulesOfCurrentGame, generateRound);
};

export default runBrainGcdGame;
