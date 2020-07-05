const getExtra = require("./get-extra");

let series;

beforeEach(() => {
  const { data } = require("./data.json");
  const { details } = data.find((d) => d.slug === "aggregation-overall");
  series = details.find((d) => d.key === "extra").series;
});

describe("Extract extra data given a key", function () {
  it("Returns the extra data for a given key", function () {
    const extraData = getExtra("2017-12-22T11:23:01.921844Z", series);
    expect(extraData).toEqual({
      quiz_session_type: "Exam",
      priority: 1000,
      score_delta: 0,
      quiz_session: 511443,
      quiz_config: 33489,
      quiz_config_title:
        "Preparation Exam: Certified DevOps Engineer - Professional for AWS",
    });
  });

  it("Throws an error if the given key is not found", function () {
    expect(() => getExtra("2017-12-22T12:23:01.921844Z", series)).toThrow(
      "Element not found"
    );
  });
});
