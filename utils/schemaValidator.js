const Ajv = require("ajv");

const ajv = new Ajv({
  allErrors: true,
  strict: false
});

function validateSchema(
  schema,
  data,
  testName = "Schema Validation"
) {
  const validator = ajv.compile(schema);

  const valid = validator(data);

  if (!valid) {
    throw new Error(
      `${testName} Schema Validation Failed:\n${JSON.stringify(
        validator.errors,
        null,
        2
      )}`
    );
  }

  return true;
}

module.exports = {
  validateSchema
};