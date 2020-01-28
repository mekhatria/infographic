import loadChart from './playerPoll.js';

export default {
  getElements: () => `

  <div id="intro" class="row">
    <div class="col-12">
      <h3 class="text-center ">Quiz: Most Valuable Players</h3>
    </div>

    <div class="col-12">

      <div class="container" id="poll">
              <div class="row" id="leftContent">
                
                  <p class="border-bottom pb-1 mb-2 question text-left">Who is the most valuable player in Copa América 2016?</p>
                  <form action="">
                      <span class="f32 d-inline">
                        <span class="flag ar flagsCountries"></span>
                        <input type="radio" name="playerPoll" value="Argentina">Lionel Messi <br> 
                      
                        <span class="flag uy flagsCountries"></span>
                        <input type="radio" name="playerPoll" value="Uruguay"> Luis Suarez <br>
                        
                        <span class="flag co flagsCountries"></span>
                        <input type="radio" name="playerPoll" value="Columbia"> James Rodriguez 
                      
                      </span>
                  </form>
               
                </div>

                <div class="row" id="rightContent">
                 

                    <p class="border-bottom pb-1 mb-2 question text-left">Who is the most valuable player in Euro 2016?</p>
                      <form action=""> 
                        <span class="f32 d-inline">
                          <span class="flag de flagsCountries"></span>
                          <input type="radio" name="playerPoll" value="Germany"> Thomas Muller <br>

                          <span class="flag _Wales flagsCountries"></span>
                          <input type="radio" name="playerPoll" value="Wales"> Gareth Bale 
                          <br>

                          <span class="flag pt flagsCountries"></span>
                          <input type="radio" name="playerPoll" value="Portugal"> Cristiano Ronaldo
                      </span>
                      </form>
                 
                </div>


      
                <div class="row">
                  <div class="col-12 text-center">
                    <button class="btn btn-primary btn-lg" type="button" onclick="getNextPage()" id="submitFct">Submit</button>
                  </div>
                </div>
        </div>
    </div>


  
`,
  onNext: () => loadChart()
};
