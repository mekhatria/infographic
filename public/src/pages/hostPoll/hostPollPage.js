import loadChart from './hostPoll.js';

export default {
  getElements: () => `
  
  <div id="intro" class="row">
    <div class="col-12">
      <h3 class="text-center ">Quiz: Host Countries</h3>
    </div>


    <div class="col-12">
      <div class="container" id="poll">
        <div class="row" id="leftContent">
         
              <p class="pollQuestion border-bottom text-left question mx-0">Where was Copa América 2016 hosted?</p>
              <form action="">
              <span class="f32 d-inline">
                <input type="radio" name="hostPoll" value="Brazil">  
                <span class="flag br flagsCountries"></span> Brazil <br>

                <input type="radio" name="hostPoll" value="USA">  
                <span class="flag us flagsCountries"></span>United States 
              </span>
              </form>
         
        </div>

        <div class="row" id="rightContent">
          
          <p class="border-bottom question text-left mx-0">Where was Euro 2016 hosted?</p>
          <form action="">
          <span class="f32 d-inline">
               <input type="radio" name="hostPoll" value="Ireland">
                <span class="flag ie flagsCountries"></span>
                Ireland <br>

                <input type="radio" name="hostPoll" value="France">
                <span class="flag fr flagsCountries"></span>
               France 
          </form>
         
        </div>
        <div class="row">
          <div class="col-12 text-center">
              <button class="btn btn-primary btn-lg w-50 w-lg-100" type="button" onclick="getNextPage()" id="submitFct">Submit</button>
          </div>
      </div>
    </div>
  
  `,
  onNext: () => loadChart()
};
