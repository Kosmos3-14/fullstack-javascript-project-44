import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const runBrainProgressionGame = () => {
  const rulesOfCurrentGame = 'What number is missing in the progression?';

  const generateRound = () => {
    const progressionLength = 10;
    const firstNum = getRandomInRange(1, 100);
    const commonDiff = getRandomInRange(1, 10);
    const progression = [];
    for (let i = 0; i < progressionLength; i += 1) {
      progression.push(firstNum + (commonDiff * i));
    }
    const hiddenNumIndex = getRandomInRange(0, progressionLength - 1);
    const correctAnswer = progression[hiddenNumIndex];
    progression[hiddenNumIndex] = '..';
    const question = progression.join(' ');
    return [question, String(correctAnswer)];
  };

  runEngine(rulesOfCurrentGame, generateRound);
};

export default runBrainProgressionGame;
