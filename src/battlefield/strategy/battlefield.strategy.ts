import { BattlefieldTarget } from "../entity/battlefield.target";
import { IncompatibleProtocol } from "./battlefield.incompatible-protocol";
import { BattlefieldProtocol } from "./protocol/battlefield.protocol";

export class BattlefieldAttackStrategy {
    private protocols: BattlefieldProtocol[];

    constructor() {
        this.protocols = [];
    }

    addProtocol(protocol: BattlefieldProtocol): void {
        for (let i: number = 0; i < this.protocols.length; i++) {
            const currentProtocol: BattlefieldProtocol = this.protocols[i];

            if (currentProtocol.isDependent(protocol)) {
                this.addProtocolAtPosition(protocol, i);

                return;
            }
        }

        this.protocols.push(protocol);
    }

    private addProtocolAtPosition(protocol: BattlefieldProtocol, position: number): void {
        this.protocols.splice(position, 0, protocol);
    }

    getProtocols(): BattlefieldProtocol[] {
        return this.protocols;
    }

    prioritizeTargets(targets: BattlefieldTarget[]): BattlefieldTarget[] {
        this.protocols.forEach(protocol => {
            targets = protocol.prioritizeTargets(targets);
        });

        return targets;
    }

    /**
     * Revisa si un protocolo
     * es compatible con los protocolos
     * ya existentes en la estrategia de ataque.
     */
    isCompatible(protocol: BattlefieldProtocol): IncompatibleProtocol|null {
        for (let i:number = 0; i < this.protocols.length; i++) {
            const currentProtocol: BattlefieldProtocol = this.protocols[i];
            
            if (currentProtocol.getIncompatibleProtocols().indexOf(protocol.constructor.name) != -1) {
                return new IncompatibleProtocol(currentProtocol, protocol);
            }
        }

        return null;
    }
}