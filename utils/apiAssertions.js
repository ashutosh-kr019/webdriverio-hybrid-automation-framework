const { expect } = require("chai");

function verifyStatus(
  response, expectedStatus
) {
  expect(response.status).to.equal(expectedStatus);
}

function verifyHeader(
  response, header
) {
  expect(response.headers).to.have.property(header.toLowerCase());
}

function verifyResponseTime(
  response, maxTime
) {
  expect(response.duration).to.be.lessThan(maxTime);
}

function verifyField(
  actual, expected
) {
  expect(actual).to.equal(expected);
}

module.exports = {
  verifyStatus,
  verifyHeader,
  verifyResponseTime,
  verifyField
};