import { BattlefieldEnemy } from "../../entity/battlefield.enemy";
import { BattlefieldTarget } from "../../entity/battlefield.target";
import { BattlefieldAbstractProtocol } from "./battlefield.abstract-protocol";
import { AvoidMechProtocol } from "./battlefield.protocol-mech-avoid";

export class PrioritizeMechProtocol extends BattlefieldAbstractProtocol {
    protected meetRequirements(target: BattlefieldTarget): boolean {
        return target.hasEnemies(BattlefieldEnemy.MECH_TYPE);
    }

    getIncompatibleProtocols(): string[] {
        return [
            AvoidMechProtocol.name,
        ];
    }
}