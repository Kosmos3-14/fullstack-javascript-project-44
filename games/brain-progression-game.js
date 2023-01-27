import commonScript from '../src/index.js';

const brainProgressionGame = () => {
  const rulesOfCurrentGame = 'What number is missing in the progression?';

  let correctAnswer;
  const randomQuestionGenerator = () => {
    const progression = [];
    const firstNum = Math.floor(Math.random() * 10);
    const commonDiff = Math.floor(Math.random() * 5) + 1;
    for (let i = 0; i < 10; i += 1) {
      progression.push(firstNum + (commonDiff * i));
    }
    const hiddenNumIndex = Math.floor(Math.random() * 10);
    correctAnswer = progression[hiddenNumIndex];
    progression[hiddenNumIndex] = '..';
    return progression.join(' ');
  };

  const correctAnswerFunc = () => correctAnswer.toString();

  commonScript(rulesOfCurrentGame, randomQuestionGenerator, correctAnswerFunc);
};

export default brainProgressionGame;
