import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const runBrainEvenGame = () => {
  const rulesOfCurrentGame = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateRound = () => {
    const question = getRandomInRange(1, 100);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

    return [question, correctAnswer];
  };

  runEngine(rulesOfCurrentGame, generateRound);
};

export default runBrainEvenGame;
