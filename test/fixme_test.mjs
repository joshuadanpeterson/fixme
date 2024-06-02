// test/fixme_test.js
import { expect } from "chai";
import { fileURLToPath } from "url";
import { dirname } from "path";
import {
  parseUserOptionsAndScan,
  retrieveMessagesFromLine,
  filesToScan,
  ignoredDirectories,
  messageChecks,
} from "../bin/fixme2.js";
import defaultFilesToScan from "../bin/fileTypes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe("Fixme.js Tests", function () {
  it("should have a default filesToScan array", function () {
    expect(filesToScan).to.deep.equal(defaultFilesToScan);
  });

  it("should have a default ignoredDirectories array", function () {
    expect(ignoredDirectories)
      .to.be.an("array")
      .that.includes("node_modules/**");
    expect(ignoredDirectories).to.include(".git/**");
  });

  it("should correctly match a TODO comment", function () {
    const result = retrieveMessagesFromLine(
      "// TODO: this needs to be done",
      1,
    );
    expect(result).to.be.an("array").that.is.not.empty;
    expect(result[0]).to.have.property("label", " ✓ TODO");
  });

  // Add more tests for other functions and scenarios as needed
});
