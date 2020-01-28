export default () => {
  // map south america
  Highcharts.mapChart('caCities', {
    chart: {
      map: 'countries/us/custom/us-all-mainland',
      backgroundColor: backgroundColor
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    mapNavigation: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    tooltip: {
      useHTML: true,
      formatter: function() {
        return (
          'City: <b>' +
          this.key +
          '</b><br/> Stadium: <a href=""' +
          this.point.link +
          '""><b> ' +
          this.point.stade +
          '</b><a><br/>' +
          'Capacity: <b>' +
          this.point.Capacity +
          '</b>'
        );
      }
    },
    series: [
      {
        // Use the gb-all map with no data as a basemap
        name: 'Basemap',
        borderColor: '#A0A0A0',
        nullColor: 'rgba(200, 200, 200, 0.3)',
        showInLegend: false
      },
      {
        name: 'Separators',
        type: 'mapline',
        nullColor: '#707070',
        showInLegend: false,
        enableMouseTracking: false
      },
      {
        // Specify points using lat/lon
        type: 'mappoint',
        name: 'Cities',
        color: 'blue',
        useHTML: true,
        color: Highcharts.getOptions().colors[1],
        data: [
          {
            name: 'Seattle',
            stade: 'CenturyLink Field',
            link: 'https://en.wikipedia.org/wiki/CenturyLink_Field',
            Capacity: 67000,
            color: americaColor,
            lat: 47.609722,
            lon: -122.333056
          },
          {
            name: 'Santa Clara',
            stade: "Levi's Stadium",
            link: 'https://en.wikipedia.org/wiki/Levi%27s_Stadium',
            Capacity: 68500,
            color: americaColor,
            lat: 37.36,
            lon: -121.97,
            lon: -118.255,
            dataLabels: {
              //align: 'left',
              //x: 5,
              y: -20,
              verticalAlign: 'top'
            }
          },
          {
            name: 'Pasadena',
            stade: 'Rose Bowl',
            link: 'https://en.wikipedia.org/wiki/Rose_Bowl_(stadium)',
            Capacity: 92542,
            color: americaColor,
            lat: 34.156111,
            lon: -118.131944,
            dataLabels: {
              align: 'left',
              y: -10,
              verticalAlign: 'middle'
            }
          },
          {
            name: 'Glendale',
            stade: 'University of Phoenix Stadium',
            link:
              'hhttps://en.wikipedia.org/wiki/University_of_Phoenix_Stadium',
            Capacity: 63400,
            color: americaColor,
            lat: 34.146111,
            lon: -118.255,
            dataLabels: {
              align: 'left',
              x: 5,
              verticalAlign: 'buttom'
            }
          },
          {
            name: 'Houston',
            stade: 'NRG Stadium',
            link: 'https://en.wikipedia.org/wiki/NRG_Stadium',
            Capacity: 71000,
            color: americaColor,
            lat: 29.762778,
            lon: -95.383056
          },
          {
            name: 'Chicago',
            stade: 'Soldier Field',
            link: 'https://en.wikipedia.org/wiki/Soldier_Field',
            Capacity: 63500,
            color: americaColor,
            lat: 41.836944,
            lon: -87.684722,
            dataLabels: {
              align: 'rigth',
              x: -55,
              verticalAlign: 'top'
            }
          },
          {
            name: 'Orlando',
            stade: 'Camping World Stadium',
            link: 'https://en.wikipedia.org/wiki/Camping_World_Stadium',
            Capacity: 60219,
            color: americaColor,
            lat: 28.54,
            lon: -81.38
          },
          {
            name: 'Foxborough',
            stade: 'Gillette Stadium',
            link: 'https://en.wikipedia.org/wiki/Gillette_Stadium',
            Capacity: 68756,
            color: americaColor,
            lat: 42.065278,
            lon: -71.248333,
            dataLabels: {
              align: 'right',
              x: 5
              //verticalAlign: 'top'
            }
          },
          {
            name: 'East Rutherford',
            stade: 'MetLife Stadium',
            link: 'https://en.wikipedia.org/wiki/MetLife_Stadium',
            Capacity: 82566,
            lat: 40.817097,
            lon: -74.085024,
            color: americaColor,
            dataLabels: {
              align: 'left',
              x: -65,
              y: -5,
              verticalAlign: 'middle'
            }
          },
          {
            name: 'Philadelphia',
            stade: 'Lincoln Financial Field',
            link: 'https://en.wikipedia.org/wiki/Lincoln_Financial_Field',
            Capacity: 69176,
            lat: 40.009376,
            lon: -75.133346,
            color: americaColor,
            dataLabels: {
              align: 'left',
              x: -65,
              verticalAlign: 'buttom'
            }
          }
        ]
      }
    ]
  });
  // map europe
  Highcharts.mapChart('euroCities', {
    chart: {
      map: 'countries/fr/custom/fr-all-mainland',
      backgroundColor: backgroundColor
    },

    title: {
      text: null
    },

    subtitle: {
      text: null
    },

    mapNavigation: {
      enabled: false
    },

    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },

    tooltip: {
      useHTML: true,
      formatter: function() {
        return (
          'City: <b>' +
          this.key +
          '</b><br/> Stadium: <a href=""' +
          this.point.link +
          '""><b> ' +
          this.point.stade +
          '</b><a><br/>' +
          'Capacity: <b>' +
          this.point.Capacity +
          '</b>'
        );
      }
    },
    series: [
      {
        // Use the gb-all map with no data as a basemap
        name: 'Basemap',
        borderColor: '#A0A0A0',
        nullColor: 'rgba(200, 200, 200, 0.3)',
        showInLegend: false
      },
      {
        name: 'Separators',
        type: 'mapline',
        nullColor: '#707070',
        showInLegend: false,
        enableMouseTracking: false
      },
      {
        // Specify points using lat/lon
        type: 'mappoint',
        name: 'Cities',
        color: 'blue',
        useHTML: true,
        color: Highcharts.getOptions().colors[1],
        data: [
          {
            name: 'Lens',
            stade: 'Stade Bollaert-Delelis	',
            link: 'https://en.wikipedia.org/wiki/Stade_Bollaert-Delelis',
            Capacity: 38223,
            color: europeColor,
            lat: 50.4322,
            lon: 2.8333,
            dataLabels: {
              align: 'left',
              x: 5,
              verticalAlign: 'buttom'
            }
          },
          {
            name: 'Villeneuve-d"Ascq',
            stade: 'Stade Pierre-Mauroy',
            link: 'https://en.wikipedia.org/wiki/Stade_Pierre-Mauroy',
            Capacity: 50186,
            color: europeColor,
            lat: 50.6233,
            lon: 3.145
          },
          {
            name: 'Saint-Denis',
            stade: 'Stade de France',
            link: 'https://en.wikipedia.org/wiki/Stade_de_France',
            Capacity: 81338,
            color: europeColor,
            lat: 48.9356,
            lon: 2.3539
          },
          {
            name: 'Paris',
            stade: 'Parc des Princes',
            link: 'https://en.wikipedia.org/wiki/Parc_des_Princes',
            Capacity: 48712,
            color: europeColor,
            lat: 48.8567,
            lon: 2.3508,
            dataLabels: {
              align: 'left',
              x: 5,
              verticalAlign: 'buttom'
            }
          },
          {
            name: 'Décines-Charpieu',
            stade: 'Parc Olympique Lyonnais	',
            link: 'https://en.wikipedia.org/wiki/Parc_Olympique_Lyonnais',
            Capacity: 59286,
            color: europeColor,
            lat: 45.7694,
            lon: 4.9594
          },
          {
            name: 'Saint-Étienne',
            stade: 'Stade Geoffroy-Guichard	',
            link: 'https://en.wikipedia.org/wiki/Stade_Geoffroy-Guichard',
            Capacity: 41965,
            color: europeColor,
            lat: 45.4347,
            lon: 4.3903,
            dataLabels: {
              align: 'left',
              x: 5,
              verticalAlign: 'buttom'
            }
          },
          {
            name: 'Bordeaux',
            stade: 'Nouveau Stade de Bordeaux',
            link: 'https://en.wikipedia.org/wiki/Nouveau_Stade_de_Bordeaux',
            Capacity: 42115,
            color: europeColor,
            lat: 44.84,
            lon: -0.58
          },
          {
            name: 'Nice',
            stade: 'Stade de Nice',
            link: 'https://en.wikipedia.org/wiki/Allianz_Riviera',
            Capacity: 35624,
            color: europeColor,
            lat: 43.7034,
            lon: 7.2663
          },
          {
            name: 'Toulouse',
            stade: 'Stadium Municipal',
            link: 'https://en.wikipedia.org/wiki/Stadium_Municipal',
            Capacity: 33150,
            lat: 43.6045,
            lon: 1.444,
            color: europeColor,
            dataLabels: {
              align: 'left',
              x: 5,
              verticalAlign: 'middle'
            }
          },
          {
            name: 'Marseille',
            stade: 'Stade Vélodrome',
            link: 'https://en.wikipedia.org/wiki/Stade_V%C3%A9lodrome',
            Capacity: 67394,
            lat: 43.2964,
            lon: 5.37,
            color: europeColor,
            dataLabels: {
              align: 'left',
              x: 5,
              verticalAlign: 'middle'
            }
          }
        ]
      }
    ]
  });
};
