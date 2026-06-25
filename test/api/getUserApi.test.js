const userService = require("../../api/userService");
const { expect } = require("chai");
const userSchema = require("../../api/userSchema");
const {validateSchema} = require("../../utils/schemaValidator");
const {verifyStatus,verifyHeader,verifyResponseTime} = require("../../utils/apiAssertions");

describe("Users API", function () {

  it("Should get all users", async function () {
    const res = await userService.getUsers();
    verifyStatus(res, 200);
    verifyHeader(res,"content-type");
    verifyResponseTime(res,2000);
    expect(res.data).to.be.an("array");
    res.data.forEach((user, index) => {
      validateSchema(userSchema,user,`User ${index + 1}`);
    });
  });

  it("Should get user by ID", async function () {
    const res = await userService.getUserById(1);
    verifyStatus(res, 200);
    validateSchema(userSchema,res.data,"Single User");
  });

});