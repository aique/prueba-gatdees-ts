import { BattlefieldEnemy } from "../../entity/battlefield.enemy";
import { BattlefieldTarget } from "../../entity/battlefield.target";
import { BattlefieldAbstractProtocol } from "./battlefield.abstract-protocol";
import { PrioritizeMechProtocol } from "./battlefield.protocol-mech-prioritize";

export class AvoidMechProtocol extends BattlefieldAbstractProtocol {
    protected meetRequirements(target: BattlefieldTarget): boolean {
        return !target.hasEnemies(BattlefieldEnemy.MECH_TYPE);
    }

    getIncompatibleProtocols(): string[] {
        return [
            PrioritizeMechProtocol.name,
        ];
    }
}