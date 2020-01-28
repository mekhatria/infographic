export default () => {
  //most valuable players ca
  Highcharts.chart('caMostValuablePlayers', {
    chart: {
      type: 'column',
      inverted: true,
      backgroundColor: backgroundColor
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    xAxis: {
      categories: ['Argentina', 'Uruguay', 'Columbia'],
      labels: {
        useHTML: true,
        formatter: function() {
          return (
            '<span class="f32"><p class="' +
            flagArry[this.value] +
            '"></p></span>'
          );
        }
      },

      title: {
        text: null
      },
      opposite: true
    },
    yAxis: {
      title: {
        text: null
      },
      visible: false,
      reversed: true
    },

    tooltip: {
      enabled: false,
      headerFormat: '<b>{point.key}</b>',
      pointFormat: '  <b>{point.y}</b>',
      valueSuffix: ' millions USD'
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          format: '{point.name} ${y}m'
        }
      }
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Most valuable players',
        color: '#d00',
        data: [
          {
            y: 134,
            name: 'Lionel Messi'
          },
          {
            y: 101,
            name: 'Luis Suarez'
          },
          {
            y: 78,
            name: 'James Rodriguez'
          }
        ]
      }
    ]
  });
  //most valuable players europe
  Highcharts.chart('euroMostValuablePlayers', {
    chart: {
      type: 'column',
      inverted: true,
      backgroundColor: backgroundColor
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    xAxis: {
      categories: ['Portugal', 'Wales', 'Germany'],
      labels: {
        useHTML: true,
        formatter: function() {
          return (
            '<span class="f32"><p class="' +
            flagArry[this.value] +
            '"></p></span>'
          );
        }
      },

      title: {
        text: null
      }
    },
    yAxis: {
      title: {
        text: null
      },
      visible: false
    },

    tooltip: {
      enabled: false,
      headerFormat: '<b>{point.key}</b>',
      pointFormat: '  <b>{point.y}</b>',
      valueSuffix: ' millions USD'
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          format: '{point.name} ${y}m'
        }
      }
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Most valuable players',
        color: '#0272a4',
        data: [
          {
            y: 123,
            name: 'Cristiano Ronaldo'
          },
          {
            y: 90,
            name: 'Gareth Bale'
          },
          {
            y: 84,
            name: 'Thomas Muller'
          }
        ]
      }
    ]
  });
};
