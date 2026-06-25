const userService = require("../../api/userService");
const { expect } = require("chai");
const {verifyStatus} = require("../../utils/apiAssertions");

describe("PATCH User API",function () {

  it("Should partially update user",
    async function () {
      const payload = {
        name: "Patched User"
      };
      const res = await userService.patchUser(1,payload);
      verifyStatus(res,200);
      expect(res.data.name).to.equal("Patched User");
    }
  );

});