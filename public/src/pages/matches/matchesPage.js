import loadChart from './matches.js';

export default {
  getElements: () => `
  
  <div id="intro" class="row">
  <div class="col-12"><h3 class="text-center ">Matches</h3></div>
  <div class="col-12" id="chartLinks">Charts: 
  <a class="caText" href="#caMatches">Copa América 2016</a> | 
  <a class="euroText" href="#euMatches">Euro 2016</a>

</div>
  <div class="col-lg-6 col-sm-12 ">
    <div id="leftSide">
      <h4 id="titleLeft" class="caText text-center">Copa América 2016</h4>
      <p class="chart"><b class="caText"> Chile was the winner</b> of the Copa America 2016 at MetLife Stadium in East Rutherford, New Jersey.</p>
      <div class=" caTableChart" id="caMatches"></div>
    </div>
  </div>

  <div class="col-lg-6 col-sm-12 ">
    <div id="rightSide">
      <h4 id="titleRight" class="text-center euroText">Euro 2016</h4>
      <p class="chart"><b class="euroText">Portugal was the winner</b> of the Euro 2016, for the first time, claimed a major title by defeating France in Paris.</p>
      <div class=" null" id="euMatches"></div>
    </div>
   </div>
</div>
`,
  afterRender: () => loadChart()
};
