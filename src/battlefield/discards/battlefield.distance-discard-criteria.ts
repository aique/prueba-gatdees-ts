import { BattlefieldCoordinates } from "../entity/battlefield.coordinates";
import { BattlefieldTarget } from "../entity/battlefield.target";
import { BattlefieldDiscardCriteria } from "./battlefield.discard-criteria";

export class DistanceDiscardCriteria implements BattlefieldDiscardCriteria {
    readonly DISCARDED_DISTANCE = parseInt(process.env.DISCARDED_DISTANCE || '100');
    
    isDiscarded(target: BattlefieldTarget): boolean {
        return target.getDistance(new BattlefieldCoordinates(0, 0)) > this.DISCARDED_DISTANCE;
    }
}