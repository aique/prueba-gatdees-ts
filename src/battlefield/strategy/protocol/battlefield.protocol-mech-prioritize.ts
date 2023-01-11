import { BattlefieldEnemy } from "../../entity/battlefield.enemy";
import { BattlefieldTarget } from "../../entity/battlefield.target";
import { BattlefieldAbstractProtocol } from "./battlefield.abstract-protocol";
import { BattlefieldProtocolFactory } from "./battlefield.protocol-factory";
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

    getName(): string {
        return BattlefieldProtocolFactory.PRIORITIZE_MECH_PROTOCOL;
    }
}