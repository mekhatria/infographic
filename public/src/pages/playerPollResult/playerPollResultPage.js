import loadChart from './playerPollResult.js';

export default {
  getElements: () =>
    `  <div id="intro" class="row">
    <div class="col-12">
      <h3 class="text-center  mb-5">Results</h3>
    </div>
    <div class="col-12">
    <div id="playerFormResult" class="playerFormResult mb-3"></div>
  </div>
  `,
  afterRender: () => loadChart()
};
