import { BattlefieldAttackStrategy } from "../strategy/battlefield.strategy";
import { BattlefieldCoordinates } from "./battlefield.coordinates";
import { BattlefieldTarget } from "./battlefield.target";

export class Battlefield {
    readonly DISCARDED_DISTANCE = 100;

    private targets: BattlefieldTarget[];
    private attackStrategy: BattlefieldAttackStrategy;

    constructor(attackStrategy: BattlefieldAttackStrategy) {
        this.targets = [];
        this.attackStrategy = attackStrategy;
    }

    addTarget(target: BattlefieldTarget): boolean {
        if (this.isDiscarded(target)) {
            return false;
        }

        this.targets.push(target);

        return true;
    }

    isDiscarded(target: BattlefieldTarget): boolean { // TODO criterios de descarte ampliables
        return target.getDistance(new BattlefieldCoordinates(0, 0)) > this.DISCARDED_DISTANCE;
    }

    getTargets(): BattlefieldTarget[] {
        return this.targets;
    }

    /**
     * Obtiene los objetivos de
     * ataque que cumplen con los protocolos
     * y simplemente retorna el primero de ellos.
     */
    nextTarget(): BattlefieldTarget|null
    {
        let prioritizedTargets: BattlefieldTarget[] = this.attackStrategy.prioritizeTargets(this.targets);

        if (!prioritizedTargets.length) {
            return null;
        }

        return prioritizedTargets[0];
    }
}