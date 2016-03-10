(function(){
    var questions = [
      {
        question: 'Question 1 of 5: The illustrious "Keyboard Cat", Fatso was first uploaded to YouTube in 2007. In what year was that footage originally filmed?',
        answers: [
          '2007',
          '1993',
          '1984',
          '1999'
        ],
        correct: '1984'
      },
        {
        question: 'Question 2 of 5: In 2012, Googles X lab neural network began identifying cats on its own by looking through 10 million randomly-selected thumbnails from which website?',
        answers: [
          'flickr',
          'youtube',
          'instagram',
          'youtube'
        ],
        correct: 'youtube'
      },
        {
        question: 'Question 3 of 5: How many degrees is in a standard cats field of vision?',
        answers: [
          '180',
          '250',
          '200',
          '360'
        ],
        correct: '200'
      },
      {
        question: 'Question 4 of 5: About how many (million) pet cats are there in the USA alone?',
        answers: [
          '40',
          '65',
          '73',
          '88'
        ],
        correct: '88'
      },
     {
        question: 'Question 5 of 5: Cats dislike which common food scent?',
        answers: [
          'citrus',
          'vanilla',
          'mint',
          'garlic'
        ],
        correct: 'citrus'
      },
    ],
    currentQuestion = 0,
    userSelections = [];

    function renderResults() {
      var correct = 0;

      cleanUp();

      for (var i = 0; i < questions.length; i++) {
        if (userSelections[i] === questions[i].correct) {
          correct++;
        }
      }

      var div = document.createElement('div');
      var results = '<div class="results">' + correct + ' out of ' + questions.length + ' answers are correct.</div>';
      div.innerHTML = results;
      document.body.appendChild(div);

      var div = document.createElement('div');
      var reset = '<button class="question-button mdl-button mdl-js-button mdl-button--raised" id="reset">Reset Quiz</button>';
      div.innerHTML = reset;
      document.body.appendChild(div);
      var resetButton = document.getElementById('reset');
      resetButton.addEventListener('click', function() {
        currentQuestion = 0;
        userSelections = [];
        cleanUp();
        renderQuestion(questions[currentQuestion]);
      });
      
      document.getElementById("reset").parentElement.classList.add("question__choices");
      
    }
  
    function cleanUp() {
      document.body.innerHTML = "";
    }

    function checkIfDone() {
      if (currentQuestion + 1 <= questions.length) {
        renderQuestion(questions[currentQuestion]);
      } else {
        renderResults();
      }
    }

    function bindAnswers() {
      var btns = document.getElementsByTagName('button');
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function() {
          currentQuestion++;
          userSelections.push(this.innerHTML);
          checkIfDone();
        }, false);
      }
    }

  function renderQuestion(question) {
  cleanUp();

  var div = document.createElement('div');
  var questionHTML = '<div class="question__question">' + question.question + '</div><div class="question__choices">';
  for (i = 0; i < question.answers.length; i++) {
    questionHTML += '<button class="question-button mdl-button mdl-js-button mdl-button--raised">' + question.answers[i] + '</button>';
  }
  questionHTML += '</div>';
  div.innerHTML = questionHTML;
  document.body.appendChild(div);
  bindAnswers();
}

    renderQuestion(questions[currentQuestion]);
  })();