import loadChart from './mostValuablePlayer.js';

export default {
  getElements: () => `
  

<div id="intro" class="row">
<div class="col-12"><h3 class="text-center ">The most valuable player</h3></div>
<div class="col-12" id="chartLinks">Charts: 
      <a class="caText" href="#caMostValuablePlayers">Copa América 2016</a> | 
      <a class="euroText" href="#euroMostValuablePlayers">Euro 2016</a>
</div>
<div class="col-lg-6 col-sm-12 ">
  <div id="leftSide">
    <h4 id="titleLeft" class="mt-3 mt-lg-0 caText text-center">Copa América 2016</h4>
    <p class="chart">Lionel Messi is by far the <b class="caText">most valuable players</b> at the Copa América 2016 tournament; Messi\s market worth is <b><i>134 million USD</i></b>, followed by Luis Suarez (<b><i>101 million USD</i></b>), and James Rodriguez (<b><i>78 million USD</i></b>).</p>
    <div class=" caTableChart" id="caMostValuablePlayers"></div>
  </div>
</div>

<div class="col-lg-6 col-sm-12 ">
  <div id="rightSide">
    <h4 id="titleRight" class="text-center euroText">Euro 2016</h4>
    <p class="chart"><b class="euroText">The most valuable player</b> at the UEFA Euro 2016 is Cristiano Ronaldo (<b><i>123 million USD</i></b>), Gareth Bales is the second most valuable player (<b><i>90 million USD</i></b>), and Thomas Muller is the third (<b><i>84 million USD</i></b>).</p>
    <div class=" null" id="euroMostValuablePlayers"></div>
  </div>
</div>
</div> 

 `,
  afterRender: () => loadChart()
};
{/* 
   
   <p>
  <table>
    <tr>
      <td colspan="2">
        <h1 align="center">The most valuable player</h1>
      </td>
    </tr>
    <tr>
      <td>
        <h2 class="caText caHeader">Copa América 2016</h2>
      </td>
      <td>
        <h2 class="euroText euHeader">Euro 2016</h2>
      </td>
    </tr>
    <tr>
      <td>
        <div class=" caTableChart" id="caMostValuablePlayers"></div>
      </td>
      <td>
        <div id="euroMostValuablePlayers"></div>
      </td>
    </tr>
    <tr>
      <td class="caTableText">Lionel Messi is by far the <b class="caText">most valuable players</b> at the Copa América 2016 tournament; Messi\s market worth is <b><i>134 million USD</i></b>, followed by Luis Suarez (<b><i>101 million USD</i></b>), and James Rodriguez (<b><i>78 million USD</i></b>).</td>
      <td class="euTableText"><b class="euroText">The most valuable player</b> at the UEFA Euro 2016 is Cristiano Ronaldo (<b><i>123 million USD</i></b>), Gareth Bales is the second most valuable player (<b><i>90 million USD</i></b>), and Thomas Muller is the third (<b><i>84 million USD</i></b>).</td>
    </tr>
  </table>
</p> */}