import { BattlefieldCoordinates } from "../../../entity/battlefield.coordinates";
import { BattlefieldTarget } from "../../../entity/battlefield.target";
import { BattlefieldAbstractProtocol } from "../battlefield.abstract-protocol";
import { AssistAlliesProtocol } from "../battlefield.protocol-assist-allies";
import { AvoidCrossfireProtocol } from "../battlefield.protocol-avoid-crossfire";
import { AvoidMechProtocol } from "../battlefield.protocol-mech-avoid";
import { PrioritizeMechProtocol } from "../battlefield.protocol-mech-prioritize";

export abstract class DistanceAbstractProtocol extends BattlefieldAbstractProtocol {
    protected origin: BattlefieldCoordinates;
    protected preferredDistance: number;

    constructor() {
        super();
        this.origin = new BattlefieldCoordinates(0, 0);
        this.preferredDistance = 0;
    }

    protected initialize(targets: BattlefieldTarget[]): void {
        this.preferredDistance = this.calculatePreferredEnemyDistance(targets, this.origin);
    }

    protected meetRequirements(target: BattlefieldTarget): boolean {
        return target.getDistance(this.origin) == this.preferredDistance;
    }

    /**
     * Obtiene la distancia
     * a la que el protocolo indica
     * que han de encontrarse los enemigos.
     */
    protected abstract calculatePreferredEnemyDistance(
        targets: BattlefieldTarget[], origin: BattlefieldCoordinates
    ): number;

    getDependencies(): string[]
    {
        return [
            AssistAlliesProtocol.name,
            AvoidCrossfireProtocol.name,
            PrioritizeMechProtocol.name,
            AvoidMechProtocol.name,
        ];
    }
}