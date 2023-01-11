import { BattlefieldTarget } from "../../entity/battlefield.target";

export interface BattlefieldProtocol {
    /**
     * Devuelve una lista
     * de objetivos que cumplen con
     * los requisitos del protocolo de ataque.
     */
    prioritizeTargets(targets: BattlefieldTarget[]): BattlefieldTarget[];

    /**
     * Obtiene el listado de protocolos incompatibles con el actual.
     */
    getIncompatibleProtocols(): string[];

    /**
     * Indica si el protocolo es dependiente de otro,
     * lo que en caso de ser cierto implicaría que su nivel
     * de prioridad es menor, con lo que deberá aplicararse después.
     */
    isDependent(protocol: BattlefieldProtocol): boolean;
}