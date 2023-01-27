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
    let min = Math.min(firstRandomNum, secondRandomNum);
    const max = Math.max(firstRandomNum, secondRandomNum);
    if (max === min || max % min === 0) {
      return min;
    }
    let remainder = max % min;
    let devider = remainder;
    while (remainder > 0) {
      devider = remainder;
      remainder = min % remainder;
      min = devider;
    }
    return devider.toString();
  };
  commonScript(rulesOfCurrentGame, randomQuestionGenerator, correctAnswerFunc);
};

export default brainGcdGame;
