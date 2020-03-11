//let url = 'http://localhost:3000/';
//linkToTheServer
let url = 'https://m51zh2s55l.execute-api.eu-west-1.amazonaws.com/Dev/';

let ajax = function(type, route, data) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      type: type,
      url: url + route,
      dataType: 'json',
      data: data,
      contentType: 'application/json',
      success: function(result) {
        resolve(result);
      },
      error: function(error) {
        reject(error);
      }
    });
  });
};
export default ajax;
