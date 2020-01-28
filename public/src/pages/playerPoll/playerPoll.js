import ajax from './../../../utils/ajax.js';

export default () => {
  var radios = document.getElementsByName('playerPoll');
  var arrayPlayerUpdated = [];

  var arrSurvey = [
    {
      answer: 0
    },
    {
      answer: 0
    },
    {
      answer: 0
    },
    {
      answer: 0
    },
    {
      answer: 0
    },
    {
      answer: 0
    }
  ];

  for (var i = 0, length = radios.length; i < length; i++) {
    arrSurvey[i].answer = radios[i].checked ? 1 : 0;
  }

  ajax(
    'POST',
    'playerPoll',
    JSON.stringify({
      answers: arrSurvey
    })
  ).then(data => {
    console.log(data);
  });
};
