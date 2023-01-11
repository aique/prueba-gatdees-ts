import { BattlefieldEnemy } from "../../src/battlefield/entity/battlefield.enemy";
import { BattlefieldProtocolFactory } from "../../src/battlefield/strategy/protocol/battlefield.protocol-factory";
import { BattlefieldSchemaType } from "../../src/battlefield/validation/battlefield.schema";

export class BattlefieldDataGenerator {
    static getValidData(): BattlefieldSchemaType {
        return {
            'protocols': [
                BattlefieldProtocolFactory.CLOSEST_ENEMIES_PROTOCOL
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