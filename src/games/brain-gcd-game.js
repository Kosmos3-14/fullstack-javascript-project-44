import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const rulesOfCurrentGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (first, second) => {
  if (second === 0) {
    return first;
  }
  return getGcd(second, first % second);
};

const generateRound = () => {
  const firstNumber = getRandomInRange(1, 100);
  const secondNumber = getRandomInRange(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(getGcd(firstNumber, secondNumber));

  return [question, correctAnswer];
};

export default () => {
  runEngine(rulesOfCurrentGame, generateRound);
};
