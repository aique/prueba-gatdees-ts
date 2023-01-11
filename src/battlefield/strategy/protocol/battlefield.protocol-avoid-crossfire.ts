import { BattlefieldTarget } from "../../entity/battlefield.target";
import { BattlefieldAbstractProtocol } from "./battlefield.abstract-protocol";
import { BattlefieldProtocolFactory } from "./battlefield.protocol-factory";

export class AvoidCrossfireProtocol extends BattlefieldAbstractProtocol {
    protected meetRequirements(target: BattlefieldTarget): boolean {
        return target.getAllies() == 0;
    }

    getName(): string {
        return BattlefieldProtocolFactory.AVOID_CROSSFIRE_PROTOCOL;
    }
}