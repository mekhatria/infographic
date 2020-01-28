import loadChart from './goalScorers.js';

export default {
  getElements: () => `
  
  <div id="intro" class="row">
  <div class="col-12"><h3 class="text-center ">Goal scorers</h3></div>
  <div class="col-12" id="chartLinks">Charts: 
      <a class="caText" href="#caGoalscorers">Copa América 2016</a> | 
      <a class="euroText" href="#euGoalscorers">Euro 2016</a>
    
  </div>
  <div class="col-lg-6 col-sm-12 " >
    <div id="leftSide">
      <h4 id="titleLeft" class="caText text-center">Copa América 2016</h4>
      <p class="chart">Chile\s Eduardo Vargas received the Golden Boot award for scoring six goals. In total,<b class="caText"> 91 goals</b> were scored by 62 different players, with three of them credited as own goals.</p>
      <div class=" caTableChart" id="caGoalscorers"></div>
    </div>
  </div>

  <div class="col-lg-6 col-sm-12 " >
    <div id="rightSide">
      <h4 id="titleRight" class="text-center euroText">Euro 2016</h4>
      <p class="chart">There were <b class="euroText">108 goals scored</b> in 51 matches, for an average of 2.12 goals per match.</p>
      <div class=" null" id="euGoalscorers"></div>
    </div>
   </div>
</div>
`,
  afterRender: () => loadChart()
};
