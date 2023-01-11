import { BattlefieldValidator } from "../../src/battlefield/validation/battlefield.validator";
import { IDIContainer } from 'rsdi';
import configureDI from "../../src/config/deps";

const container: IDIContainer = configureDI();

describe("Battlefield input validation", () => {
  const validator: BattlefieldValidator = container.get(BattlefieldValidator);

  test("basic battlefield data validation", () => {
    expect(validator.isValid(JSON.parse('{}'))).toBe(false);
    expect(validator.isValid(JSON.parse('{"protocols": ["protocolA", "protocolB"]}'))).toBe(false);
    expect(validator.isValid(JSON.parse('{"protocols": ["protocolA", "protocolB"], "scan": [{"coordinates": {"x": 10, "y": 30}, "enemies": {"number": 5, "type": "soldier"}}]}'))).toBe(true);
    expect(validator.isValid(JSON.parse('{"protocols": ["protocolA", "protocolB"], "scan": [{"coordinates": {"x": 10, "y": 30}, "enemies": {"number": 5, "type": "soldier"}, "allies": 10}]}'))).toBe(true);
  });
});