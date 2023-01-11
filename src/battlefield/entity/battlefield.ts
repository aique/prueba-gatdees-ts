import { BattlefieldAttackStrategy } from "../strategy/battlefield.strategy";
import { BattlefieldTarget } from "./battlefield.target";
import * as dotenv from "dotenv";
import { BattlefieldDiscardCriteria } from "../discards/battlefield.discard-criteria";

dotenv.config();

export class Battlefield {
    private targets: BattlefieldTarget[];
    private attackStrategy: BattlefieldAttackStrategy;
    private discardCriterias: BattlefieldDiscardCriteria[];

    constructor(attackStrategy: BattlefieldAttackStrategy, discardCriterias: BattlefieldDiscardCriteria[]) {
        this.targets = [];
        this.attackStrategy = attackStrategy;
        this.discardCriterias = discardCriterias;
    }

    addTarget(target: BattlefieldTarget): boolean {
        if (this.isDiscarded(target)) {
            return false;
        }

        this.targets.push(target);

        return true;
    }

    isDiscarded(target: BattlefieldTarget): boolean {
        for (let i: number = 0; i < this.discardCriterias.length; i++) {
            const currentDiscardCriteria: BattlefieldDiscardCriteria = this.discardCriterias[i];

            if (currentDiscardCriteria.isDiscarded(target)) {
                return true;
            }
        }

        return false;
    }

    getTargets(): BattlefieldTarget[] {
        return this.targets;
    }

    /**
     * Obtiene los objetivos de
     * ataque que cumplen con los protocolos
     * y simplemente retorna el primero de ellos.
     */
    nextTarget(): BattlefieldTarget|null {
        const prioritizedTargets: BattlefieldTarget[] = this.attackStrategy.prioritizeTargets(this.targets);

        if (!prioritizedTargets.length) {
            return null;
        }

        return prioritizedTargets[0];
    }
}