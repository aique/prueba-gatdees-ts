import { BattlefieldTarget } from "../../entity/battlefield.target";
import { BattlefieldProtocol } from "./battlefield.protocol";

export abstract class BattlefieldAbstractProtocol implements BattlefieldProtocol
{
    prioritizeTargets(targets: BattlefieldTarget[]): BattlefieldTarget[] {
        const prioritizedTargets: BattlefieldTarget[] = [];

        this.initialize(targets);

        targets.forEach(target => {
            if (this.meetRequirements(target)) {
                prioritizedTargets.push(target);
            }
        });

        return prioritizedTargets;
    }

    /**
     * Realiza tareas de
     * inicialización en base a
     * la colección de objetivos de ataque.
     *
     * Será sobreescrito en función de sus necesidades.
     */
    initialize(targets: BattlefieldTarget[]): void {}

    /**
     * Condición que debe
     * cumplir un objetivo de ataque para
     * satisfacer los requerimientos del protocolo.
     */
    protected abstract meetRequirements(target: BattlefieldTarget): boolean;

    isDependent(protocol: BattlefieldProtocol): boolean {
        return this.getDependencies().indexOf(protocol.constructor.name) != -1;
    }

    /**
     * Establece aquellos protocolos
     * que han de aplicarse previamente,
     * de forma que puedan ser combinados.
     */
    protected abstract getDependencies(): string[];

    abstract getIncompatibleProtocols(): BattlefieldProtocol[];
}