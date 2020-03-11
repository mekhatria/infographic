import { getPoll } from './../../../utils/hostAjax.js';

export default () => {
  setTimeout(function() {
    getPoll('hostPollGET').then(data => {
      let arrayUpdated = [2, 5, 4, 7];
      for (let i = 0; i < data.answer.length; i++) {
        arrayUpdated[i] = data.answer[i];
      }
      //Make the chart
      Highcharts.chart('hostFormResult', {
        chart: {
          type: 'column',
          backgroundColor: backgroundColor
        },
        title: {
          text: ''
        },
        subtitle: {
          text: null
        },
        xAxis: {
          labels: {
            style: {
              fontWeight: 'bold'
            }
          },
          categories: [
            {
              useHTML: true,
              name: 'Copa América',
              categories: ['Brazil', 'USA']
            },
            {
              name: 'Euro 2016',
              categories: ['Ireland', 'France']
            }
          ]
        },
        yAxis: {
          title: {
            text: 'Number of answers'
          }
        },
        legend: {
          enabled: false
        },

        series: [
          {
            name: 'Number of votes',
            data: [
              {
                y: arrayUpdated[0],
                color: americaColor
              },
              {
                y: arrayUpdated[1],
                color: americaColor
              },
              {
                y: arrayUpdated[2],
                color: europeColor
              },
              {
                y: arrayUpdated[3],
                color: europeColor
              }
            ]
          }
        ]
      });
    });
  }, 250);
};
