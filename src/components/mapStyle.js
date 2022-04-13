// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
// eslint-disable-next-line import/prefer-default-export
export const styleLayer = {
  id: 'data',
  type: 'fill-extrusion',
<<<<<<< HEAD
  paint: {
    // 'fill-outline-color': '#ffae00',
=======
  hover: true,
  paint: {
    'fill-outline-color': '#ffae00',
>>>>>>> 197406b87a494bd63d9c32a0e1392849df111bff
    'fill-extrusion-color': {
      property: 'co2',
      stops: [
        [10, '#98FED6'],
        [30, '#63FFC2'],
        [50, '#32FFB0'],
        [70, '#00FF9D'],
        [90, '#00EB8E'],
        [120, '#02D47E'],
        // [60, '#fdae61'],
        // [70, '#f46d43'],
        // [80, '#d53e4f'],
      ],
    },
    'fill-extrusion-height': [
      'interpolate',
      ['linear'],
      ['get', 'co2'],
      // stop pairs
      0, 0,
      10, 100,
      20, 200,
      30, 300,
      40, 400,
      50, 500,
    ],
<<<<<<< HEAD
    'fill-extrusion-opacity': 0.6,
=======
    'fill-opacity': [
      'case',
      ['boolean', ['feature-state', 'hover'], false],
      1,
      0.2,
    ],
>>>>>>> 197406b87a494bd63d9c32a0e1392849df111bff
  },
};
