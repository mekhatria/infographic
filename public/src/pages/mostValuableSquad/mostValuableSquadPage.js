import loadChart from './mostValuableSquad.js';

export default {
  getElements: () => `


  <div id="intro" class="row">
  <div class="col-12"><h3 class="text-center ">The most valuable squad</h3></div>
  <div class="col-12" id="chartLinks">Charts: 
  <a class="caText" href="#caMostValuableSquad">Copa América 2016</a> | 
  <a class="euroText" href="#euMostValuableSquad">Euro 2016</a>

</div>

      <div class="col-lg-6 col-sm-12 " >
        <div id="leftSide" class="text-right">
         
        <h4 id="titleLeft" class="caText text-center">Copa América 2016</h4>
        <p class="chart"><b>The United States</b> hosted the event from the 3rd to the 26th of June 2016. Ten venues were selected for the tournament.</p>
        <div class=" caTableChart" id="caMostValuableSquad"></div>
          </div>
        
      </div>
  
      <div class="col-lg-6 col-sm-12 " >
        <div id="rightSide">
        <h4 id="titleRight" class="text-center euroText">Euro 2016</h4>
        <p class="chart"><b>France</b> hosted the event from the June 10 to July 10, 2016. Ten venues were selected for the tournament.</p>
        <div class=" null" id="euroMostValuableSquad"></div>
       </div>
       </div>
  </div>
  
 
  `,
  afterRender: () => loadChart()
};
