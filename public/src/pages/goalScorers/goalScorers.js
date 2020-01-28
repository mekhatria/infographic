export default () => {
  //Goalscorers CA
  Highcharts.chart('caGoalscorers', {
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
          return '';
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
      headerFormat: '',
      pointFormat: '<b>{point.y}</b>', //'  <b>{point.y}</b>',
      valueSuffix: ' goal scorers'
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          format: '{y} goal scorers'
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
        name: 'Goal scorers',
        color: '#d00',
        data: [
          {
            y: 91
          }
        ]
      }
    ]
  });

  //Goalscorers Euro
  Highcharts.chart('euGoalscorers', {
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
          return '';
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
      headerFormat: '',
      pointFormat: '<b>{point.y}</b>', //'  <b>{point.y}</b>',
      valueSuffix: ' goal scorers'
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          format: '{y} goal scorers'
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
        name: 'Goal scorers',
        color: '#0272a4',
        data: [
          {
            y: 108
          }
        ]
      }
    ]
  });
};
