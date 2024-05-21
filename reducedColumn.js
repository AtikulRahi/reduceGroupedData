var table = ee.FeatureCollection("projects/ee-learning-rahi/assets/bgd_admpop_adm3_2022");
print(table)

var reducedVal = table.reduceColumns({
  selectors: ["F_TL","M_TL","T_TL","ADM1_NAME"],
  reducer: ee.Reducer.mean().repeat(3).group({
    groupField: 3,
    groupName: "Division"
  })
});
print(reducedVal)