import { Battlefield } from "./entity/battlefield";

export class BattlefieldMapper {
    map(battlefieldInfo: unknown): Battlefield {
        return new Battlefield()
    }
}