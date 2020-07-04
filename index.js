const extractData = require("./extract-data");
const { data } = require("./data.json");
const { details } = data.find((d) => d.slug === "aggregation-overall");
const { series } = details.find((d) => d.key === "score");
if (series) {
  const prova = extractData(
    "2015-08-19T14:00:19.352000Z",
    "2015-10-12T07:27:47.493000Z",
    series
  );
  console.log(prova);
}
