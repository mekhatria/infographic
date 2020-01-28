export default () => {
  //matches euro
  var Portugal = '#ec343b',
    Croatia = '#d9141b',
    Poland = '#ab1015',
    Switzerland = '#7c0c0f',
    Wales = '#eee94b',
    NorthernIreland = '#ece634',
    Belgium = '#eae31c',
    Hungary = '#d9d214',
    France = '#a3ee4b',
    RepublicofIreland = '#70c212',
    Iceland = '#63aa10',
    England = '#55930e',
    Germany = '#4ba3ee',
    Slovakia = '#1c8bea',
    Italy = '#147ED9',
    Spain = '#1270c2';

  var data = [
    {
      id: '1',
      name: 'Portugal',
      color: Portugal
    },
    {
      id: '2',
      parent: '1',
      name: 'Portugal',
      color: Portugal
    },
    {
      id: '3',
      parent: '1',
      name: 'France',
      color: France
    },
    {
      id: '4',
      parent: '2',
      name: 'Portugal',
      value: 1,
      color: Portugal
    },
    {
      id: '5',
      parent: '2',
      name: 'Wales',
      value: 1,
      color: Wales
    },
    {
      id: '6',
      parent: '3',
      name: 'France',
      value: 1,
      color: France
    },
    {
      id: '7',
      parent: '3',
      name: 'Germany',
      value: 1,
      color: Germany
    },
    {
      id: '8',
      parent: '4',
      value: 1,
      name: 'Portugal',
      color: Portugal
    },
    {
      id: '9',
      parent: '4',
      value: 1,
      name: 'Poland',
      color: Poland
    },
    {
      id: '10',
      parent: '5',
      value: 1,
      name: 'Wales',
      color: Wales
    },
    {
      id: '11',
      parent: '5',
      value: 1,
      name: 'Belgium',
      color: Belgium
    },
    {
      id: '12',
      parent: '6',
      name: 'France',
      value: 1,
      color: France
    },
    {
      id: '13',
      parent: '6',
      name: 'Iceland',
      value: 1,
      color: Iceland
    },
    {
      id: '14',
      parent: '7',
      name: 'Germany',
      value: 1,
      color: Germany
    },
    {
      id: '15',
      parent: '7',
      name: 'Italy',
      value: 1,
      color: Italy
    },
    {
      id: '16',
      parent: '8',
      value: 1,
      name: 'Portugal',
      goals: 4,
      color: '#ec343b'
    },
    {
      id: '17',
      parent: '8',
      value: 1,
      name: 'Croatia',
      goals: 3,
      color: '#d9141b'
    },
    {
      id: '18',
      parent: '9',
      value: 1,
      name: 'Poland',
      goals: 2,
      color: '#ab1015'
    },
    {
      id: '19',
      parent: '9',
      value: 1,
      name: 'Switzerland',
      goals: 1,
      color: '#7c0c0f'
    },
    {
      id: '20',
      parent: '10',
      value: 1,
      name: 'Wales',
      goals: '1 (3)',
      color: '#eee94b'
    },
    {
      id: '21',
      parent: '10',
      value: 1,
      name: 'Northern Ireland',
      goals: '1 (4)',
      color: '#ece634'
    },
    {
      id: '22',
      parent: '11',
      value: 1,
      name: 'Belgium',
      goals: '1 (3)',
      color: '#eae31c'
    },
    {
      id: '23',
      parent: '11',
      value: 1,
      name: 'Hungary',
      goals: '1 (2)',
      color: '#d9d214'
    },
    {
      id: '24',
      parent: '12',
      value: 1,
      name: 'France',
      color: '#a3ee4b'
    },
    {
      id: '25',
      parent: '12',
      value: 1,
      name: 'Republic of Ireland',
      color: '#70c212'
    },
    {
      id: '26',
      parent: '13',
      value: 1,
      name: 'Iceland',
      color: '#63aa10'
    },
    {
      id: '27',
      parent: '13',
      value: 1,
      name: 'England',
      color: '#55930e'
    },
    {
      id: '28',
      parent: '14',
      value: 1,
      name: 'Germany',
      color: '#4ba3ee'
    },
    {
      id: '29',
      parent: '14',
      value: 1,
      name: 'Slovakia',
      color: '#1c8bea'
    },
    {
      id: '30',
      parent: '15',
      value: 1,
      name: 'Italy',
      color: '#147ED9'
    },
    {
      id: '31',
      parent: '15',
      value: 1,
      name: 'Spain',
      color: '#1270c2'
    }
  ];

  Highcharts.chart('euMatches', {
    chart: {
      height: '100%',
      backgroundColor: backgroundColor
    },

    title: {
      text: null
    },
    series: [
      {
        type: 'sunburst',
        data: data,
        startAngle: -90,
        dataLabels: {
          formatter: function() {
            if (this.point.options.name) {
              return '<b>' + this.point.name + '</b><br>';
            }
          },
          style: {
            fontWeight: 'normal',
            fontSize: '12px'
          }
        },
        color: '#f8f8f8',
        borderColor: 'gray'
      }
    ],
    tooltip: {
      headerFormat: '',
      pointFormat: '{point.name}'
    },
    credits: {
      enabled: false
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 600
          },
          chartOptions: {
            series: [
              {
                dataLabels: {
                  style: {
                    fontSize: '9px'
                  }
                }
              }
            ]
          }
        }
      ]
    }
  });

  //matches ca

  var Chile = '#ec343b',
    Mexico = '#ab1015',
    Colombia = '#eee94b',
    Peru = '#eae31c',
    Argentina = '#a3ee4b',
    Venezuela = '#63aa10',
    USA = '#4ba3ee',
    Ecuador = '#147ED9';

  var data = [
    {
      id: '1',
      name: 'Chile',
      color: Chile
    },
    {
      id: '2',
      parent: '1',
      name: 'Chile',
      color: Chile
    },
    {
      id: '3',
      parent: '1',
      name: 'Argentina',
      color: Argentina
    },

    {
      id: '4',
      parent: '2',
      name: 'Chile',
      value: 1,
      color: Chile
    },
    {
      id: '5',
      parent: '2',
      name: 'Colombia',
      value: 1,
      color: Colombia
    },
    {
      id: '6',
      parent: '3',
      name: 'Argentina',
      value: 1,
      color: Argentina
    },
    {
      id: '7',
      parent: '3',
      name: 'USA',
      value: 1,
      color: USA
    },

    {
      id: '8',
      parent: '4',
      value: 1,
      name: 'Chile',
      color: Chile
    },
    {
      id: '9',
      parent: '4',
      value: 1,
      name: 'Mexico',
      color: Mexico
    },
    {
      id: '10',
      parent: '5',
      value: 1,
      name: 'Colombia',
      color: Colombia
    },
    {
      id: '11',
      parent: '5',
      value: 1,
      name: 'Peru',
      color: Peru
    },

    {
      id: '12',
      parent: '6',
      name: 'Argentina',
      value: 1,
      color: Argentina
    },
    {
      id: '13',
      parent: '6',
      name: 'Venezuela',
      value: 1,
      color: Venezuela
    },
    {
      id: '14',
      parent: '7',
      name: 'USA',
      value: 1,
      color: USA
    },
    {
      id: '15',
      parent: '7',
      name: 'Ecuador',
      value: 1,
      color: Ecuador
    }
  ];
  Highcharts.chart('caMatches', {
    chart: {
      height: '100%',
      backgroundColor: backgroundColor
    },

    title: {
      text: null
    },
    series: [
      {
        type: 'sunburst',
        data: data,
        startAngle: -90,
        dataLabels: {
          formatter: function() {
            if (this.point.options.name) {
              return '<b>' + this.point.name + '</b><br>';
            }
          },
          style: {
            fontWeight: 'normal',
            fontSize: '12px'
          }
        },
        color: '#f8f8f8',
        borderColor: 'gray'
      }
    ],
    tooltip: {
      headerFormat: '',
      pointFormat: '{point.name}'
    },
    credits: {
      enabled: false
    }
  });
};
