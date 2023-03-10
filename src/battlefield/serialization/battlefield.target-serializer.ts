import { BattlefieldCoordinates } from "../entity/battlefield.coordinates";
import { BattlefieldEnemy } from "../entity/battlefield.enemy";
import { BattlefieldTarget } from "../entity/battlefield.target";
import { BattlefieldTargetType } from "../validation/battlefield.schema";

export class BattlefieldTargetSerializer {
    deserialize(data: BattlefieldTargetType): BattlefieldTarget {
        const coordinates: BattlefieldCoordinates = this.deserializeCoordinates(data.coordinates);
        const enemy: BattlefieldEnemy = this.deserializeEnemy(data.enemies);
        const allies: number = data.allies || 0;

        return new BattlefieldTarget(coordinates, enemy, allies);
    }

    private deserializeCoordinates(data: BattlefieldTargetType["coordinates"]): BattlefieldCoordinates {
        return new BattlefieldCoordinates(
            data.x, data.y
        );
    }

    private deserializeEnemy(data: BattlefieldTargetType["enemies"]): BattlefieldEnemy {
        return new BattlefieldEnemy(
            data.type, data.number
        );
    }
}