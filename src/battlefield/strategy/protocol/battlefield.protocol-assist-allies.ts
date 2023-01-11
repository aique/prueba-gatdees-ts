import { BattlefieldTarget } from "../../entity/battlefield.target";
import { BattlefieldAbstractProtocol } from "./battlefield.abstract-protocol";
import { BattlefieldProtocol } from "./battlefield.protocol";

export class AssistAlliesProtocol extends BattlefieldAbstractProtocol
{
    protected meetRequirements(target: BattlefieldTarget): boolean {
        return target.getAllies() > 0;
    }

    public getIncompatibleProtocols(): BattlefieldProtocol[] {
        return [];
    }

    getDependencies(): string[] {
        return [];
    }
}