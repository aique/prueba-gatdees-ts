import { BattlefieldValidatorFactory } from "../../src/battlefield/validation/battlefield.factory";
import { BattlefieldValidator } from "../../src/battlefield/validation/battlefield.validator";

describe("Battlefield input validation", () => {
  const validator = new BattlefieldValidator(
    new BattlefieldValidatorFactory()
  );

  test("basic battlefield data validation", () => {
    expect(validator.isValid(JSON.parse('{}'))).toBe(false);
    expect(validator.isValid(JSON.parse('{"protocols": ["protocolA", "protocolB"]}'))).toBe(false);
    expect(validator.isValid(JSON.parse('{"protocols": ["protocolA", "protocolB"], "scan": [{"coordinates": {"x": 10, "y": 30}, "enemies": {"number": 5, "type": "soldier"}}]}'))).toBe(true);
    expect(validator.isValid(JSON.parse('{"protocols": ["protocolA", "protocolB"], "scan": [{"coordinates": {"x": 10, "y": 30}, "enemies": {"number": 5, "type": "soldier"}, "allies": 10}]}'))).toBe(true);
  });
});