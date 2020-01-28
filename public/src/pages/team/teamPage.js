import loadChart from './team.js';

export default {
  getElements: () => `
  <div id="intro" class="row">
    <div class="col-12">
      <h3>Teams</h3>
     
    </div>
    
  </div>
  <div class="container">
  <div class="row">
      <div class="col-lg-12 col-sm-12">
          <div class="row">
                      <div class="col-lg-6 col-sm-6" id="leftContent">
                        <p><em class="caText">16 American teams</em> participated in the 45th edition of <em class="caText">Copa América</em> since its inception in 1916.</p>
                      </div>
                      <div class="col-lg-6 col-sm-6 " id="rightContent">
                        <p><em class="euroText">24 Europeans teams</em> participated in the 15th <em class="euroText">UEFA European Championship.</em></p>
                      </div>
          </div>
       </div>
    </div>
    <div class="row">
      <div class="col-lg-12 col-sm-12 text-center">
        <div id="team" class="mb-3 "></div>
      </div>
    </div>
    
  </div>`,
  afterRender: () => loadChart()
};
