export default function updateWeek(featureCollection, weeklyValues) {
  const { features } = featureCollection;
  return {
    type: 'FeatureCollection',
    features: features.map((f) => {
      const zoneValue = weeklyValues.find((week) => week.zoneId === f.properties.zoneId);
      if (!zoneValue) {
        return { ...f };
      }

      const values = { ...zoneValue };
      delete values.week;
      delete values.zoneId;

      const properties = {
        ...f.properties,
        ...values,
      };
      return { ...f, properties };
    }),
  };
}
