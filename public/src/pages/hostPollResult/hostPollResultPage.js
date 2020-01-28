import loadChart from './hostPollResult.js';

export default {
  getElements: () =>
  `
  <div id="intro" class="row">
    <div class="col-12">
      <h3 class="text-center  mb-5">Results</h3>
    </div>
    <div class="col-12">
    <div id="hostFormResult" class="hostFormResult mb-3"></div>
  </div>
  
  
  
  `,
    // `<p class="hostFormResult" id="hostFormResult"><i class="fa fa-spinner fa-spin" style="font-size:30px"></i></p>`,
  afterRender: () => loadChart()
};
