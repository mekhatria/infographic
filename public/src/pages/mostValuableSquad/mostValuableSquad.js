export default () => {
  //most valuable squad ca
  Highcharts.chart('caMostValuableSquad', {
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
      categories: ['Argentina'],
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
        name: 'Most valuable squad',
        color: '#d00',
        data: [
          {
            y: 591.5,
            name: 'Argentina'
          }
        ]
      }
    ]
  });
  //most valuable squad euro
  Highcharts.chart('euroMostValuableSquad', {
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
      categories: ['Germany'],
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
        name: 'Most valuable squad',
        color: '#0272a4',
        data: [
          {
            y: 629.4,
            name: 'Germany'
          }
        ]
      }
    ]
  });
};
