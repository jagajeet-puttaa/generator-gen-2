const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-gen-2:server", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ serverName: true });
  });

  it("creates files", () => {
    assert.file(["serverfile.txt"]);
  });
});
