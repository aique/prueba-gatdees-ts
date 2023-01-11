import { BattlefieldCoordinates } from "../../../entity/battlefield.coordinates";
import { BattlefieldTarget } from "../../../entity/battlefield.target";
import { BattlefieldProtocolFactory } from "../battlefield.protocol-factory";
import { DistanceAbstractProtocol } from "./battlefield.abstract-distance-protocol";
import { FurthestEnemiesProtocol } from "./battlefield.protocol-enemies-furthest";

export class ClosestEnemiesProtocol extends DistanceAbstractProtocol {
    protected calculatePreferredEnemyDistance(
        targets: BattlefieldTarget[],
        origin: BattlefieldCoordinates
    ): number {
        let closestEnemyDistance: number = -1;

        targets.forEach(target => {
            const currentDistance: number = target.getDistance(origin);

            if (closestEnemyDistance == -1 || currentDistance < closestEnemyDistance) {
                closestEnemyDistance = target.getDistance(origin);
            }
        });

        return closestEnemyDistance;
    }

    public getIncompatibleProtocols(): string[] {
        return [
            FurthestEnemiesProtocol.name,
        ];
    }

    getName(): string {
        return BattlefieldProtocolFactory.CLOSEST_ENEMIES_PROTOCOL;
    }
}