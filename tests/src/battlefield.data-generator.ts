import { BattlefieldEnemy } from "../../src/battlefield/entity/battlefield.enemy";
import { BattlefieldSchemaType } from "../../src/battlefield/validation/battlefield.schema";

export class BattlefieldDataGenerator {
    static getValidData(): BattlefieldSchemaType {
        return {
            'protocols': [
                'protocolA'
            ],
            'scan': [
                {
                    'coordinates': {
                        'x': 0,
                        'y': 40,
                    },
                    'enemies': {
                        'number': 10,
                        'type': BattlefieldEnemy.SOLDIER_TYPE
                    },
                    'allies': 5,
                },
            ],
        };
    }
}