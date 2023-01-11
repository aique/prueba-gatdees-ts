import { BattlefieldTarget } from "../../entity/battlefield.target";
import { BattlefieldAbstractProtocol } from "./battlefield.abstract-protocol";
import { AvoidMechProtocol } from "./battlefield.protocol-mech-avoid";

export class PrioritizeMechProtocol extends BattlefieldAbstractProtocol {
    protected meetRequirements(target: BattlefieldTarget): boolean {
        return target.getAllies() == 0;
    }

    getIncompatibleProtocols(): string[] {
        return [
            AvoidMechProtocol.name,
        ];
    }
}