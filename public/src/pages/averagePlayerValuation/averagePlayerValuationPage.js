import loadChart from './averagePlayerValuation.js';

export default {
  getElements: () => `
  
  <div id="intro" class="row">
      <div class="col-12"><h3 class="text-center ">Average player valuation</h3></div>
      <div class="col-12" id="chartLinks">Charts: 
      <a class="caText" href="#caAveragePlayerValuation">Copa América 2016</a> | 
      <a class="euroText" href="#euAveragePlayerValuation">Euro 2016</a>
    
    </div>
      <div class="col-lg-6 col-sm-12 text-right" >
        <div id="leftSide">
          <h4 id="titleLeft" class="caText text-center">Copa América 2016</h4>
          <p class="chart">The <b class="caText">average player salary</b> at the Copa América tournament is <b><i>5.8 million USD</i></b></p>
          <div class=" caTableChart" id="caAveragePlayerValuation"></div>
        </div>
      </div>
  
      <div class="col-lg-6 col-sm-12 text-left" >
          <div id="rightSide">
            <h4 id="titleRight" class="text-center euroText">Euro 2016</h4>
            <p class="chart">The <b class="euroText">average player salary</b> at the Euro 2016 is <b><i>10.09 million USD</i></b>.</p>
            <div class=" null" id="euAveragePlayerValuation"></div>
          </div>
       </div>
  </div>
  `,
  afterRender: () => loadChart()
};
