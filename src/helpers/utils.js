export default function updateWeek(featureCollection, weeklyValues) {
  const { features } = featureCollection;
  console.log(featureCollection);
  console.log(weeklyValues);
  return {
    type: 'FeatureCollection',
    features: features.map((f) => {
      const zoneValue = weeklyValues.find((week) => week.zoneId === f.properties.zoneId);
      console.log(zoneValue);
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
