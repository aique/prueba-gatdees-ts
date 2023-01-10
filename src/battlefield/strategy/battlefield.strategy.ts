import { BattlefieldTarget } from "../entity/battlefield.target";
import { BattlefieldProtocol } from "./protocol/battlefield.protocol";

export class BattlefieldAttackStrategy {
    private protocols: BattlefieldProtocol[];

    constructor() {
        this.protocols = [];
    }

    prioritizeTargets(targets: BattlefieldTarget[]): BattlefieldTarget[] {
        return targets;
    }
}