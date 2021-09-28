// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
// eslint-disable-next-line import/prefer-default-export
export const styleLayer = {
  id: 'data',
  type: 'fill-extrusion',
  paint: {
    // 'fill-outline-color': '#ffae00',
    'fill-extrusion-color': {
      property: 'co2',
      stops: [
        [10, '#3288bd'],
        [30, '#66c2a5'],
        [50, '#abdda4'],
        [70, '#e6f598'],
        [90, '#ffffbf'],
        [120, '#fee08b'],
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
    'fill-extrusion-opacity': 0.6,
  },
};
