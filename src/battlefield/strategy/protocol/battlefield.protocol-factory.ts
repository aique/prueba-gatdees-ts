import { BattlefieldProtocol } from "./battlefield.protocol";

export class BattlefieldProtocolFactory {
    static readonly CLOSEST_ENEMIES_PROTOCOL = 'closest-enemies';
    static readonly FURTHEST_ENEMIES_PROTOCOL = 'furthest-enemies';
    static readonly ASSIST_ALLIES_PROTOCOL = 'assist-allies';
    static readonly AVOID_CROSSFIRE_PROTOCOL = 'avoid-crossfire';
    static readonly PRIORITIZE_MECH_PROTOCOL = 'prioritize-mech';
    static readonly AVOID_MECH_PROTOCOL = 'avoid-mech';

    private protocols: {name: string, value: BattlefieldProtocol}[];

    constructor(protocols: {name: string, value: BattlefieldProtocol}[]) {
        this.protocols = protocols;
    }

    create(name: string): BattlefieldProtocol|null {
        this.protocols.forEach(protocol => {
            if (protocol.name === name) {
                return protocol.value; // TODO revisar funcionamiento
            }
        });

        return null;
    }
}