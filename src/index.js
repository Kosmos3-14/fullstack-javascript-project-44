import readlineSync from 'readline-sync';

const commonScript = (rulesOfCurrentGame, randomQuestionGenerator, correctAnswerFunc) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n${rulesOfCurrentGame}`);
  for (let i = 0; i < 3; i += 1) {
    const randomQuestion = randomQuestionGenerator();
    console.log(`Question: ${randomQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = correctAnswerFunc(randomQuestion);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default commonScript;
