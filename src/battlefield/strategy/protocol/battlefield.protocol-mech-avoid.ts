import { BattlefieldTarget } from "../../entity/battlefield.target";
import { BattlefieldAbstractProtocol } from "./battlefield.abstract-protocol";
import { PrioritizeMechProtocol } from "./battlefield.protocol-mech-prioritize";

export class AvoidMechProtocol extends BattlefieldAbstractProtocol {
    protected meetRequirements(target: BattlefieldTarget): boolean {
        return target.getAllies() == 0;
    }

    getIncompatibleProtocols(): string[] {
        return [
            PrioritizeMechProtocol.name,
        ];
    }
}