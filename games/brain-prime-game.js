import commonScript from '../src/index.js';

const brainPrimeGame = () => {
  const rulesOfCurrentGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const randomQuestionGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    return randomNumber;
  };

  const correctAnswerFunc = (randomQuestion) => {
    let correct = 'yes';
    if (randomQuestion < 2) {
      correct = 'no';
      return correct;
    }
    let divider = 2;
    while (divider <= randomQuestion / 2) {
      if (randomQuestion % divider === 0) {
        correct = 'no';
        break;
      }
      divider += 1;
    }
    return correct;
  };

  commonScript(rulesOfCurrentGame, randomQuestionGenerator, correctAnswerFunc);
};

export default brainPrimeGame;
