import commonScript from '../src/index.js';

const brainEvenGame = () => {
  const rulesOfCurrentGame = 'Answer "yes" if the number is even, otherwise answer "no".';

  const randomQuestionGenerator = () => {
    const randomNumber = Math.round(Math.random() * 100);
    return randomNumber;
  };

  const correctAnswerFunc = (randomQuestion) => {
    const correct = (randomQuestion % 2 === 0) ? 'yes' : 'no';
    return correct;
  };

  commonScript(rulesOfCurrentGame, randomQuestionGenerator, correctAnswerFunc);
};

export default brainEvenGame;
