const userService = require("../../api/userService");
const userData = require("../../data/api/users.json");
const { expect } = require("chai");
const {verifyStatus} = require("../../utils/apiAssertions");

describe("User CRUD API",function () {

  it("Should create a new user",async function () {
      const res = await userService.createUser(userData.createUser);
      verifyStatus(res,201);
      expect(res.data.name).to.equal(userData.createUser.name);
    }
  );

  it("Should update user details",async function () {
      const res = await userService.updateUser(1,userData.updateUser);
      verifyStatus(res,200);
      expect(res.data.name).to.equal(userData.updateUser.name);
    }
  );

  it("Should delete user",async function () {
      const res = await userService.deleteUser(1);
      verifyStatus(res,200);
    }
  );

});