export default () => {
  //Average player valuation CA
  Highcharts.chart('caAveragePlayerValuation', {
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
        name: 'Average player valuation',
        color: '#d00',
        data: [
          {
            y: 5.8
          }
        ]
      }
    ]
  });
  //Average player valuation Euro
  Highcharts.chart('euAveragePlayerValuation', {
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
        name: 'Average player valuation',
        color: '#0272a4',
        data: [
          {
            y: 10.09
          }
        ]
      }
    ]
  });
};
