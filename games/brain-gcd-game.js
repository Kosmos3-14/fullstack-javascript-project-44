import commonScript from '../src/index.js';

const brainGcdGame = () => {
  const rulesOfCurrentGame = 'Find the greatest common divisor of given numbers.';

  let firstRandomNum;
  let secondRandomNum;
  const randomQuestionGenerator = () => {
    firstRandomNum = Math.round(Math.random() * 100);
    secondRandomNum = Math.round(Math.random() * 100);
    return `${firstRandomNum} ${secondRandomNum}`;
  };

  const correctAnswerFunc = () => {
    let correctAnswer;
    if (firstRandomNum >= secondRandomNum && firstRandomNum % secondRandomNum === 0) {
      correctAnswer = secondRandomNum;
    }
    if (firstRandomNum > secondRandomNum) {
      let remainder = firstRandomNum % secondRandomNum;
      let devider = remainder;
      while (remainder > 0) {
        devider = remainder;
        remainder = secondRandomNum % remainder;
        secondRandomNum = devider;
      }
      correctAnswer = devider;
    }
    if (secondRandomNum > firstRandomNum && secondRandomNum % firstRandomNum === 0) {
      correctAnswer = firstRandomNum;
    }
    if (secondRandomNum > firstRandomNum) {
      let remainder = secondRandomNum % firstRandomNum;
      let devider = remainder;
      while (remainder > 0) {
        devider = remainder;
        remainder = firstRandomNum % remainder;
        firstRandomNum = devider;
      }
      correctAnswer = devider;
    }
    return String(correctAnswer);
  };

  commonScript(rulesOfCurrentGame, randomQuestionGenerator, correctAnswerFunc);
};

export default brainGcdGame;
