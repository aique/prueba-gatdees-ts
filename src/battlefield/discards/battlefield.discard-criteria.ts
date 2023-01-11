import { BattlefieldTarget } from "../entity/battlefield.target";

export interface BattlefieldDiscardCriteria {
    isDiscarded(target: BattlefieldTarget): boolean
}