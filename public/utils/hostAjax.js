import ajax from './ajax.js';

export function postPoll(route, answers) {
  return ajax('POST', route, JSON.stringify(answers));
}
export function getPoll(route) {
  return ajax('GET', route);
}
