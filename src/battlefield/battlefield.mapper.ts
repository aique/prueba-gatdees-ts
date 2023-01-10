import { BattlefieldValidator } from "./battlefield.validator";
import { Battlefield } from "./entity/battlefield";

export class BattlefieldMapper {
    private validator: BattlefieldValidator;

    constructor(validator: BattlefieldValidator) {
        this.validator = validator;
    }

    map(battlefieldInfo: unknown): Battlefield {
        if (!this.validator.isValid(battlefieldInfo)) {
            throw new Error("Invalid battlefield info");
        }

        return new Battlefield()
    }
}