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

    static getPrioritizeMechCase(): BattlefieldSchemaType {
        return {
            'protocols':[
                BattlefieldProtocolFactory.PRIORITIZE_MECH_PROTOCOL
            ],
            'scan':[{
                'coordinates': {'x': 0, 'y': 40},
                'enemies':{
                    'type': 'soldier',
                    'number': 10
                }
            },{
                'coordinates': {'x': 0, 'y': 80},
                'allies': 5,
                'enemies':{
                    'type': 'mech',
                    'number': 1
                }
            }]
        };
    }

    static getMultipleProtocolsCase(): BattlefieldSchemaType {
        return {
            'protocols':[
                BattlefieldProtocolFactory.CLOSEST_ENEMIES_PROTOCOL,
                BattlefieldProtocolFactory.AVOID_MECH_PROTOCOL
            ],
            'scan':[{
                'coordinates': {'x': 0, 'y': 1},
                'enemies':{
                    'type': 'mech',
                    'number': 1
                }
            }, {
                'coordinates': {'x': 0, 'y': 10},
                'enemies': {
                    'type': 'soldier',
                    'number': 10
                }
            },{
                'coordinates': {'x': 0, 'y': 99},
                'enemies': {
                    'type': 'mech',
                    'number': 1
                }
            }]
        };
    }

    static getIncompatibleProtocolsCase(): BattlefieldSchemaType {
        return {
            'protocols': [
                BattlefieldProtocolFactory.PRIORITIZE_MECH_PROTOCOL,
                BattlefieldProtocolFactory.AVOID_MECH_PROTOCOL,
            ],
            'scan': [{
                'coordinates': {'x': 0, 'y': 40},
                'allies': 5,
                'enemies': {
                    'number': 10,
                    'type': BattlefieldEnemy.SOLDIER_TYPE
                },
            }],
        };
    }
}