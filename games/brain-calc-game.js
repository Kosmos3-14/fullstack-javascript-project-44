import commonScript from '../src/index.js';

const brainCalcGame = () => {
  const rulesOfCurrentGame = 'What is the result of the expression?';

  let correctAnswer;
  const randomQuestionGenerator = () => {
    const firstRandomNumber = Math.round(Math.random() * 100);
    const secondRandomNumber = Math.round(Math.random() * 100);
    const randomOperator = Math.random();
    if (randomOperator <= 0.33) {
      correctAnswer = firstRandomNumber + secondRandomNumber;
      return `${firstRandomNumber} + ${secondRandomNumber}`;
    } if (randomOperator > 0.33 && randomOperator <= 0.66) {
      correctAnswer = firstRandomNumber - secondRandomNumber;
      return `${firstRandomNumber} - ${secondRandomNumber}`;
    }
    correctAnswer = firstRandomNumber * secondRandomNumber;
    return `${firstRandomNumber} * ${secondRandomNumber}`;
  };

  const correctAnswerFunc = () => String(correctAnswer);

  commonScript(rulesOfCurrentGame, randomQuestionGenerator, correctAnswerFunc);
};

export default brainCalcGame;
