import loadChart from './credits.js';

export default {
  getElements: () => `

  <div id="intro" class="row">
    <div class="col-12 mt-5" >
    <h1 style="font-family:'Raleway',sans-serif;font-size:1.8em">Thanks!</h1>

    <a href="./" class="btn btn-primary btn-lg w-50 w-lg-100 px-5" style="margin:20px 0px" >Replay</a>


      <p class="text-left mt-1">These charts were created with <a href="https://www.highcharts.com/">the Highcharts library</a>. Click here to learn more.</p>
      <p class="text-left mt-1">Feel free to inspect and alter this code. You can download the souce here. (link to your github repo with the code).</p>

      <p class="text-left mt-1">Data source: <a href="https://en.wikipedia.org/wiki/UEFA_Euro_2016#Final">Wikipedia</a> and <a href="https://www.statista.com/chart/4959/how-the-copa-america-and-euro-2016-measure-up/">Statista</a></p>
    </div>
`,
  afterRender: () => loadChart(),
  afterRender: () => $('#navigation').hide()
};
