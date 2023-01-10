import { BattlefieldAttackStrategy } from "../strategy/battlefield.strategy";
import { BattlefieldProtocol } from "../strategy/protocol/battlefield.protocol";
import { BattlefieldProtocolFactory } from "../strategy/protocol/battlefield.protocol-factory";
import { BattlefieldSchemaType } from "../validation/battlefield.schema";

export class BattlefieldStrategySerializer {
    private factory: BattlefieldProtocolFactory;

    constructor(factory: BattlefieldProtocolFactory) {
        this.factory = factory;
    }

    deserialize(protocols: BattlefieldSchemaType["protocols"]): BattlefieldAttackStrategy {
        const attackStrategy: BattlefieldAttackStrategy = new BattlefieldAttackStrategy();

        protocols.forEach(protocolName => {
            const protocol: BattlefieldProtocol|null = this.factory.create(protocolName);

            if (protocol != null) {
                const incompatibleProtocols: boolean = attackStrategy.isCompatible(protocol);

                if (incompatibleProtocols) {
                    throw new Error("Incompatible protocols");
                }

                attackStrategy.addProtocol(protocol);
            }
        });

        return attackStrategy;
    }
}