const express = require('express')
const app = express()
const port = 4000

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  


app.get('/', (req, res) => {
    var questionsAndAnswers = [
      {
        questionText: 'HTML stands for_______.',
        answerOptions: [
          { answerText: 'Hyperactive Text Markup Language', isCorrect: false },
          { answerText: 'Hyper Text Markup Language', isCorrect: true },
          { answerText: 'Hyper Text Machine Language', isCorrect: false },
          { answerText: 'None of these', isCorrect: false },
        ],
      },

      {
        questionText: 'Which is the correct syntax to include comment in an HTML document?',
        answerOptions: [
          { answerText: '//', isCorrect: false },
          { answerText: '/* Comment */', isCorrect: false },
          { answerText: '// Comment //', isCorrect: false },
          { answerText: '<!-- Comment -->', isCorrect: true },
        ],
      },
      {
        questionText: ' Which element/tag defines a paragraph?',
        answerOptions: [
          { answerText: '<p>', isCorrect: true },
          { answerText: '<pre>', isCorrect: false },
          { answerText: '<panel>', isCorrect: false },
          { answerText: 'None of the above', isCorrect: false },
        ],
      },
      {
        questionText: "Which tag/element defines the HTML document's body?",
        answerOptions: [
          { answerText: '<HTML>', isCorrect: false },
          { answerText: '<HTMLbody>', isCorrect: false },
          { answerText: '<bdy>', isCorrect: false },
          { answerText: '<body></body>', isCorrect: true },
        ],
      },
      {
        questionText: "Which tag contains the meta information about the HTML page?",
        answerOptions: [
          { answerText: '<html>', isCorrect: false },
          { answerText: '<title>', isCorrect: false },
          { answerText: '<head>', isCorrect: true },
          { answerText: '<body></body>', isCorrect: false },
        ],
      },
    ];
    res.status(200).json(questionsAndAnswers);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})