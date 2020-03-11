var getData = require('./db'); //call the db file
let msgCodeOk = '200';

module.exports = {
  postHostData: answers =>
    new Promise((resolve, reject) => {
      return getData('hostPolls')
        .then(docs => {
          for (i = 0; i < answers.length; i++) {
            // Update the data
            docs.answers[i] = docs.answers[i] + answers[i].answer;
            // tempUpDatedPolls[i] = docs.answers[i];
          }
          docs.markModified('answers');
          docs.save(function(err) {
            //save the data on the DB
            if (err) return reject(err);
          });
          //console.log('tempUpDatedPolls ' + tempUpDatedPolls);

          return resolve({
            status: msgCodeOk,
            from: '/hostpoll',
            answer: docs.answers
          });
        })
        .catch(err => {
          throw err;
        });
    }),
  getHostData: () =>
    new Promise((resolve, reject) => {
      console.log(' ....... First: getHostData ...... ');
      return getData('hostPolls')
        .then(docs => {
          console.log(' ....... getHostData ...... ');
          return resolve({
            status: msgCodeOk,
            from: '/hostpoll GET',
            answer: docs.answers
          });
        })
        .catch(err => {
          console.log(' ....... First: getHostData Err...... ', err);
          throw err;
        });
    }),
  postPlayerData: answers =>
    new Promise((resolve, reject) => {
      return getData('playerPolls')
        .then(docs => {
          for (i = 0; i < answers.length; i++) {
            // Update the data
            docs.answers[i] = docs.answers[i] + answers[i].answer;
          }
          docs.markModified('answers');
          docs.save(function(err) {
            // Save the data on the DB
            if (err) throw err;
          });
          return resolve({
            status: msgCodeOk,
            from: '/playerpoll',
            answer: docs.answers
          });
        })
        .catch(err => {
          throw err;
        });
    }),
  getPlayerData: () =>
    new Promise((resolve, reject) => {
      return getData('playerPolls')
        .then(docs => {
          return resolve({
            status: msgCodeOk,
            from: '/playerpoll GET',
            answer: docs.answers
          });
        })
        .catch(err => {
          throw err;
        });
    })
};
