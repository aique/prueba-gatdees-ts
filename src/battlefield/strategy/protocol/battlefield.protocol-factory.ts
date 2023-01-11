import { BattlefieldProtocol } from "./battlefield.protocol";

interface ProtocolItem {
    name: string,
    value: BattlefieldProtocol
}

export class BattlefieldProtocolFactory {
    static readonly CLOSEST_ENEMIES_PROTOCOL = 'closest-enemies';
    static readonly FURTHEST_ENEMIES_PROTOCOL = 'furthest-enemies';
    static readonly ASSIST_ALLIES_PROTOCOL = 'assist-allies';
    static readonly AVOID_CROSSFIRE_PROTOCOL = 'avoid-crossfire';
    static readonly PRIORITIZE_MECH_PROTOCOL = 'prioritize-mech';
    static readonly AVOID_MECH_PROTOCOL = 'avoid-mech';

    private protocols: ProtocolItem[];

    constructor(protocols: ProtocolItem[]) {
        this.protocols = protocols;
    }

    create(name: string): BattlefieldProtocol|null {
        for (let i: number = 0; i < this.protocols.length; i++) {
            const currentProtocol: ProtocolItem = this.protocols[i];

            if (currentProtocol.name === name) {
                return currentProtocol.value;
            }
        }

        return null;
    }
}