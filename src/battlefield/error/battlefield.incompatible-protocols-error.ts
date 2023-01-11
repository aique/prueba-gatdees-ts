import { IncompatibleProtocol } from "../strategy/battlefield.incompatible-protocol";

export class IncompatibleProtocolsError extends Error {
    private incompatibleProtocol: IncompatibleProtocol;

    constructor(incompatibleProtocol: IncompatibleProtocol) {
        super();
        this.incompatibleProtocol = incompatibleProtocol;
    }

    getMessagge(): string {
        const protocol1Name: string = this.incompatibleProtocol.getProtocol1().getName();
        const protocol2Name: string = this.incompatibleProtocol.getProtocol2().getName();

        return `Incompatible protocols between ${protocol1Name} and ${protocol2Name}`;
    }
}