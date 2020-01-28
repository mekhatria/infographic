//import ajax from './../../../utils/ajax.js';
import { postPoll } from './../../../utils/hostAjax.js';

export default () => {
  var arrayUpdated = [];

  var radios = document.getElementsByName('hostPoll');

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
    }
  ];

  for (var i = 0, length = radios.length; i < length; i++) {
    arrSurvey[i].answer = radios[i].checked ? 1 : 0;
  }
  console.log('arrSurvey', arrSurvey);
  postPoll('hostPoll', { answers: arrSurvey });
};
