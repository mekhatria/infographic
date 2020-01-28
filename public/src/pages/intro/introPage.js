export default {
  getElements: () => `

  

    <div id="intro" class="d-flex flex-row flex-wrap flex-lg-nowrap mt-5 justify-content-center">
      <div class="order-1 order-lg-1 align-self-center w-50" id="leftContent">
        
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Copa_Am%C3%A9rica_Centenario.svg/290px-Copa_Am%C3%A9rica_Centenario.svg.png" class="center">
      </div>
      <div class="order-3 order-lg-2">
        <h1 style="font-size:1.8em" class="pb-2 mt-5 font-weight-bolder border-bottom">Copa América &amp; UEFA Euro 2016</h1>
        <h2 style="font-size:1.4em" class="pt-2 font-weight-bolder">By The Numbers</h2>
        <button class="btn btn-primary btn-lg" type="button" onclick="getNextPage();$('#navigation').show();" id="startFct">Start</button>
      </div>
      <div class="order-2 order-lg-3 w-50" id="rightContent">
       
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/UEFA_Euro_2016_Logo.svg/267px-UEFA_Euro_2016_Logo.svg.png" class="center">
      </div>
    </div>
    
`,
afterRender: () => $("#navigation").hide()
};
