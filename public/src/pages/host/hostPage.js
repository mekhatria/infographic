import loadChart from './host.js';

export default {
  getElements: () => `
  
  <div id="intro" class="row">
    <div class="col-12"><h3 class="text-center ">Hosts</h3></div>
    <div class="col-12" id="chartLinks">Charts: 
      <a class="caText" href="#caCities">Copa América 2016</a> | 
      <a class="euroText" href="#euroCities">Euro 2016</a>
    
  </div>
    <div class="col-lg-6 col-sm-12 " id="leftContent">
      <div id="leftSide">
        <h4 id="titleLeft" class="mt-3 mt-lg-0 caText text-center">Copa América 2016</h4>
        <p class="chart"><b>The United States</b> <b class="caText">hosted</b> the event from the 3rd to the 26th of June 2016. Ten venues were selected for the tournament.</p>
        <div class=" caTableChart" id="caCities"></div>
      </div>
    </div>
    
    <div class="col-lg-6 col-sm-12 " id="rightContent">
      <div id="rightSide">
        <h4 id="titleRight" class="text-center euroText">Euro 2016</h4>
        <p class="chart"><b>France</b> <b class="euroText">hosted</b> the event from the June 10 to July 10, 2016. Ten venues were selected for the tournament.</p>
        <div class=" null" id="euroCities"></div>
      </div>
    </div>
   </div>   
  `,
  afterRender: () => loadChart()
};
