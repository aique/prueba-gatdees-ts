import { BattlefieldValidatorFactory } from "./battlefield.factory";
import { battlefieldSchema, BattlefieldSchemaType } from "./battlefield.schema";

export class BattlefieldValidator {
    private validatorFactory: BattlefieldValidatorFactory;

    constructor(validatorFactory: BattlefieldValidatorFactory) {
        this.validatorFactory = validatorFactory;
    }

    isValid(battlefieldInfo: unknown): boolean {
        const profileValidation = this.validatorFactory.validatorFactory<BattlefieldSchemaType>(battlefieldSchema);
        
        try {
          profileValidation.verify(battlefieldInfo as BattlefieldSchemaType);
        } catch (err: unknown) {
          return false;
        }

        return true;
    }
}