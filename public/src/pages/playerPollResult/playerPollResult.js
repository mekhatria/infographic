import ajax from './../../../utils/ajax.js';

export default () => {
  setTimeout(function() {
    ajax('GET', 'playerPollGET').then(data => {
      let arrayPlayerUpdated = [];

      for (let i = 0; i < data.answer.length; i++) {
        arrayPlayerUpdated[i] = data.answer[i];
      }
      console.log('In ajax arrayPlayerUpdated:  ' + arrayPlayerUpdated);
      //Make the chart
      Highcharts.chart('playerFormResult', {
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
              name: 'Copa Amérca',
              categories: ['LM', 'LS', 'JR']
            },
            {
              name: 'Euro2016',
              categories: ['TM', 'GB', 'CR']
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
                y: arrayPlayerUpdated[0],
                name: 'Lionel Messi',
                color: americaColor
              },
              {
                y: arrayPlayerUpdated[1],
                name: 'Luis Suarez',
                color: americaColor
              },
              {
                y: arrayPlayerUpdated[2],
                name: 'James Rodriguez',
                color: americaColor
              },
              {
                y: arrayPlayerUpdated[3],
                name: 'Thomas Muller',
                color: europeColor
              },
              {
                y: arrayPlayerUpdated[4],
                name: 'Gareth Bale',
                color: europeColor
              },
              {
                y: arrayPlayerUpdated[5],
                name: 'Cristiano Ronaldo',
                color: europeColor
              }
            ]
          }
        ]
      });
    });
  }, 250);
};
