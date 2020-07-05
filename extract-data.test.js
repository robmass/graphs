const extractData = require("./extract-data");

let series;
beforeEach(() => {
  const { data } = require("./data.json");
  const { details } = data.find((d) => d.slug === "aggregation-overall");
  series = details.find((d) => d.key === "score").series;
});

describe("Extract data from a serie", function () {
  it("Returns the subset of data included between two dates that exactly match the “x” key in the serie", function () {
    const extractedData = extractData(
      "2015-08-19T14:00:19.352000Z",
      "2015-10-12T07:27:47.493000Z",
      series
    );

    expect(extractedData).toEqual([
      { y: 282, x: "2015-08-19T14:00:19.352000Z" },
      { y: 227, x: "2015-10-08T14:45:31.991000Z" },
      { y: 185, x: "2015-10-12T07:27:47.493000Z" },
    ]);
  });

  it("Returns the subset of data included between two dates with the start_date not included in the serie, taking the closest next value", function () {
    const extractedData = extractData(
      "2015-09-19T14:00:19.352000Z",
      "2015-10-12T07:27:47.493000Z",
      series
    );

    expect(extractedData).toEqual([
      { y: 227, x: "2015-10-08T14:45:31.991000Z" },
      { y: 185, x: "2015-10-12T07:27:47.493000Z" },
    ]);
  });

  it("Returns the subset of data included between two dates with the end_date not included in the serie, taking the closest next value", function () {
    const extractedData = extractData(
      "2017-12-22T11:22:19.559305Z",
      "2017-12-31T14:44:47.953673Z",
      series
    );

    expect(extractedData).toEqual([
      {
        y: 293,
        x: "2017-12-22T11:22:19.559305Z",
      },
      {
        y: 292,
        x: "2017-12-22T11:22:42.428318Z",
      },
      {
        y: 292,
        x: "2017-12-22T11:23:01.921844Z",
      },
      {
        y: 292,
        x: "2017-12-29T14:03:44.414849Z",
      },
      {
        y: 292,
        x: "2017-12-29T14:04:16.279764Z",
      },
      {
        y: 292,
        x: "2017-12-29T14:04:35.601349Z",
      },
      {
        y: 292,
        x: "2017-12-29T14:04:59.923170Z",
      },
      {
        y: 292,
        x: "2017-12-29T14:12:38.451147Z",
      },
      {
        y: 292,
        x: "2017-12-29T14:44:47.953673Z",
      },
      {
        y: 292,
        x: "2018-01-03T09:04:28.864141Z",
      },
    ]);
  });

  it("Returns the subset of data included between two dates with the end_date not included in the serie, taking the closest next value", function () {
    const extractedData = extractData(
      "2017-12-29T14:04:40.601349Z",
      "2017-12-31T14:44:47.953673Z",
      series
    );

    expect(extractedData).toEqual([
      {
        y: 292,
        x: "2017-12-29T14:04:59.923170Z",
      },
      {
        y: 292,
        x: "2017-12-29T14:12:38.451147Z",
      },
      {
        y: 292,
        x: "2017-12-29T14:44:47.953673Z",
      },
      {
        y: 292,
        x: "2018-01-03T09:04:28.864141Z",
      },
    ]);
  });

  it("Returns an error when start date is greater than end date ", function () {
    expect(() =>
      extractData(
        "2017-12-31T14:44:47.953673Z",
        "2017-12-29T14:04:40.601349Z",
        series
      )
    ).toThrow("Start Date must be less or equal to End Date");
  });
});
