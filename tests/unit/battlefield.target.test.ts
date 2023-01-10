import { BattlefieldCoordinates } from "../../src/battlefield/entity/battlefield.coordinates";
import { BattlefieldEnemy } from "../../src/battlefield/entity/battlefield.enemy";
import { BattlefieldTarget } from "../../src/battlefield/entity/battlefield.target";

describe("Battlefield targets validation", () => {
  const enemy: BattlefieldEnemy = new BattlefieldEnemy(BattlefieldEnemy.SOLDIER_TYPE, 1);

  const origin: BattlefieldCoordinates = new BattlefieldCoordinates(0, 0);

  const coordinates1: BattlefieldCoordinates = new BattlefieldCoordinates(50, 70);
  const coordinates2: BattlefieldCoordinates = new BattlefieldCoordinates(0, 40);
  const coordinates3: BattlefieldCoordinates = new BattlefieldCoordinates(20, 30);

  const target1: BattlefieldTarget = new BattlefieldTarget(
    coordinates1, enemy
  );

  const target2: BattlefieldTarget = new BattlefieldTarget(
    coordinates2, enemy
  );

  const target3: BattlefieldTarget = new BattlefieldTarget(
    coordinates3, enemy
  );

  test("distance validation", () => {
      expect(target1.getDistance(origin) > target2.getDistance(origin)).toBe(true);
      expect(target3.getDistance(origin) < target2.getDistance(origin)).toBe(true);
  });
});