import loadChart from './hostPollResult.js';

export default {
  getElements: () =>
    `<style>
    .loader {
      border: 16px solid #f3f3f3;
      border-radius: 50%;
      border-top: 16px solid #3498db;
      width: 120px;
      height: 120px;
      -webkit-animation: spin 2s linear infinite; /* Safari */
      animation: spin 2s linear infinite;
      display: inline-block;      
    }
    
    /* Safari */
    @-webkit-keyframes spin {
      0% { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    </style>
  <div id="intro" class="row">
    <div class="col-12">
      <h3 class="text-center  mb-5">Results</h3>
    </div>
    <div class="col-12">
    <div id="hostFormResult" class="hostFormResult mb-3" > <div class="loader"></div> </div>
  </div>
  
  
  
  `,
  // `<p class="hostFormResult" id="hostFormResult"><i class="fa fa-spinner fa-spin" style="font-size:30px"></i></p>`,
  afterRender: () => loadChart()
};

