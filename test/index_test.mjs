// /test/index_test.js
import { expect } from "chai";
import { fileURLToPath } from "url";
import { dirname } from "path";
import {
  filesToScan,
  ignoredDirectories,
  retrieveMessagesFromLine,
} from "../index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe("Index.js Tests", function () {
  it("should correctly identify files to scan", function () {
    expect(filesToScan).to.include("**/*.js");
    expect(filesToScan).to.include("Makefile");
    expect(filesToScan).to.include("**/*.sh");
  });

  it("should correctly identify ignored directories", function () {
    expect(ignoredDirectories).to.include("node_modules/**");
    expect(ignoredDirectories).to.include(".git/**");
  });

  it("should correctly match a TODO comment", function () {
    const result = retrieveMessagesFromLine(
      "// TODO: this needs to be done",
      1,
    );
    expect(result).to.be.an("array").that.is.not.empty; // Corrected line
    expect(result[0]).to.have.property("label", " ✓ TODO");
  });

  // Add more tests for other functions and scenarios as needed
});
