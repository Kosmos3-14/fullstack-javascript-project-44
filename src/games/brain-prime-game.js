import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const runBrainPrimeGame = () => {
  const rulesOfCurrentGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const generateRound = () => {
    const question = getRandomInRange(1, 100);
    const isPrime = (num) => {
      if (num < 2) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    };
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  runEngine(rulesOfCurrentGame, generateRound);
};

export default runBrainPrimeGame;
