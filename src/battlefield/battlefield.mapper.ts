import { BattlefieldValidator } from "./validation/battlefield.validator";
import { Battlefield } from "./entity/battlefield";
import { BattlefieldAttackStrategy } from "./strategy/battlefield.strategy";
import { BattlefieldSchemaType } from "./validation/battlefield.schema";
import { BattlefieldTargetSerializer } from "./serialization/battlefield.target-serializer";
import { BattlefieldStrategySerializer } from "./serialization/battlefield.strategy-serializer";
import { BattlefieldDiscardCriteria } from "./discards/battlefield.discard-criteria";

export class BattlefieldMapper {
    private validator: BattlefieldValidator;
    private targetSerializer: BattlefieldTargetSerializer;
    private strategySerializer: BattlefieldStrategySerializer;
    private discardCriterias: BattlefieldDiscardCriteria[];

    constructor(
        validator: BattlefieldValidator,
        targetSerializer: BattlefieldTargetSerializer,
        strategySerializer: BattlefieldStrategySerializer,
        discardCriterias: BattlefieldDiscardCriteria[]
    ) {
        this.validator = validator;
        this.targetSerializer = targetSerializer;
        this.strategySerializer = strategySerializer;
        this.discardCriterias = discardCriterias;
    }

    map(battlefieldInfo: unknown): Battlefield {
        if (!this.validator.isValid(battlefieldInfo)) {
            throw new Error("Invalid battlefield info");
        }

        const attackStrategy: BattlefieldAttackStrategy = this.strategySerializer.deserialize((battlefieldInfo as BattlefieldSchemaType).protocols)

        let battlefield: Battlefield = new Battlefield(
            attackStrategy, this.discardCriterias
        );

        (battlefieldInfo as BattlefieldSchemaType).scan.forEach(item => {
            battlefield.addTarget(
                this.targetSerializer.deserialize(item)
            );
        });

        return battlefield;
    }
}