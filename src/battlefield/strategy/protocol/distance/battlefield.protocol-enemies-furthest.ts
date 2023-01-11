import { BattlefieldCoordinates } from "../../../entity/battlefield.coordinates";
import { BattlefieldTarget } from "../../../entity/battlefield.target";
import { BattlefieldProtocolFactory } from "../battlefield.protocol-factory";
import { DistanceAbstractProtocol } from "./battlefield.abstract-distance-protocol";
import { ClosestEnemiesProtocol } from "./battlefield.protocol-enemies-closest";

export class FurthestEnemiesProtocol extends DistanceAbstractProtocol {
    protected calculatePreferredEnemyDistance(
        targets: BattlefieldTarget[],
        origin: BattlefieldCoordinates
    ): number {
        let furthestEnemyDistance: number = -1;

        targets.forEach(target => {
            const currentDistance: number = target.getDistance(origin);

            if (furthestEnemyDistance == -1 || currentDistance > furthestEnemyDistance) {
                furthestEnemyDistance = target.getDistance(origin);
            }
        })

        return furthestEnemyDistance;
    }

    public getIncompatibleProtocols(): string[] {
        return [
            ClosestEnemiesProtocol.name,
        ];
    }

    getName(): string {
        return BattlefieldProtocolFactory.FURTHEST_ENEMIES_PROTOCOL;
    }
}