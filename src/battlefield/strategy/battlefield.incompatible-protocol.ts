import { BattlefieldProtocol } from "./protocol/battlefield.protocol";

export class IncompatibleProtocol {
    private protocol1: BattlefieldProtocol;
    private protocol2: BattlefieldProtocol;

    constructor(protocol1: BattlefieldProtocol, protocol2: BattlefieldProtocol) {
        this.protocol1 = protocol1;
        this.protocol2 = protocol2;
    }

    getProtocol1(): BattlefieldProtocol {
        return this.protocol1;
    }

    getProtocol2(): BattlefieldProtocol {
        return this.protocol2;
    }
}