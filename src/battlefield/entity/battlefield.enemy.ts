export class BattlefieldEnemy {
    static readonly MECH_TYPE = 'mech';
    static readonly SOLDIER_TYPE = 'soldier';

    private type: string;
    private number: number;

    constructor(type: string, number: number) {
        this.type = type;
        this.number = number;
    }

    getType(): string {
        return this.type;
    }

    getNumber(): number {
        return this.number;
    }

    hasType(expectedType: string): boolean {
        return expectedType === this.type;
    }
}