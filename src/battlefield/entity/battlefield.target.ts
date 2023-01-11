import { BattlefieldCoordinates } from "./battlefield.coordinates";
import { BattlefieldEnemy } from "./battlefield.enemy";

export class BattlefieldTarget {
    private coordinates: BattlefieldCoordinates;
    private enemy: BattlefieldEnemy;
    private allies: number;

    constructor(
        coordinates: BattlefieldCoordinates,
        enemy: BattlefieldEnemy,
        allies: number = 0
    ) {
        this.coordinates = coordinates;
        this.enemy = enemy;
        this.allies = allies;
    }

    getCoordinates(): BattlefieldCoordinates {
        return this.coordinates;
    }

    getEnemy(): BattlefieldEnemy {
        return this.enemy;
    }

    getAllies(): number {
        return this.allies;
    }

    getDistance(origin: BattlefieldCoordinates): number {
        const x: number = this.getCoordinates().getX();
        const y: number = this.getCoordinates().getY();

        return Math.sqrt(Math.pow((origin.getX() - x), 2) + Math.pow((origin.getY() - y), 2));
    }

    hasEnemies(type: string): boolean {
        return this.getEnemy().hasType(type) && this.getEnemy().getNumber() > 0;
    }
}