export default function updateWeek(featureCollection, weeklyValues) {
  const { features } = featureCollection;
  return {
    type: 'FeatureCollection',
    features: features.map((f) => {
      console.log(weeklyValues);
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
      console.log(f);
      console.log(properties);
      return { ...f, properties };
    }),
  };
}
