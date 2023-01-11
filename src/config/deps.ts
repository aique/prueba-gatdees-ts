import DIContainer, { IDIContainer, object, use } from "rsdi";
import { BattlefieldController } from "../battlefield/controllers/battlefield.controller";
import { BattlefieldMapper } from "../battlefield/battlefield.mapper";
import { BattlefieldValidator } from "../battlefield/validation/battlefield.validator";
import { BattlefieldValidatorFactory } from "../battlefield/validation/battlefield.factory";
import { BattlefieldTargetSerializer } from "../battlefield/serialization/battlefield.target-serializer";
import { BattlefieldStrategySerializer } from "../battlefield/serialization/battlefield.strategy-serializer";
import { BattlefieldProtocolFactory } from "../battlefield/strategy/protocol/battlefield.protocol-factory";
import { AssistAlliesProtocol } from "../battlefield/strategy/protocol/battlefield.protocol-assist-allies";
import { FurthestEnemiesProtocol } from "../battlefield/strategy/protocol/distance/battlefield.protocol-enemies-furthest";
import { ClosestEnemiesProtocol } from "../battlefield/strategy/protocol/distance/battlefield.protocol-enemies-closest";
import { AvoidCrossfireProtocol } from "../battlefield/strategy/protocol/battlefield.protocol-avoid-crossfire";
import { PrioritizeMechProtocol } from "../battlefield/strategy/protocol/battlefield.protocol-mech-prioritize";
import { AvoidMechProtocol } from "../battlefield/strategy/protocol/battlefield.protocol-mech-avoid";

export default function configureDI(): IDIContainer {
  const container: DIContainer = new DIContainer();
  container.add({
    /**
     * Protocols
     */ 
    [BattlefieldProtocolFactory.name]: object(BattlefieldProtocolFactory).construct([
      {name: BattlefieldProtocolFactory.FURTHEST_ENEMIES_PROTOCOL, value: new FurthestEnemiesProtocol()},
      {name: BattlefieldProtocolFactory.CLOSEST_ENEMIES_PROTOCOL, value: new ClosestEnemiesProtocol()},
      {name: BattlefieldProtocolFactory.ASSIST_ALLIES_PROTOCOL, value: new AssistAlliesProtocol()},
      {name: BattlefieldProtocolFactory.AVOID_CROSSFIRE_PROTOCOL, value: new AvoidCrossfireProtocol()},
      {name: BattlefieldProtocolFactory.PRIORITIZE_MECH_PROTOCOL, value: new PrioritizeMechProtocol()},
      {name: BattlefieldProtocolFactory.AVOID_MECH_PROTOCOL, value: new AvoidMechProtocol()},
    ]),
    /**
     * Battlefield
     */
    [BattlefieldValidatorFactory.name]: object(BattlefieldValidatorFactory),
    [BattlefieldTargetSerializer.name]: object(BattlefieldTargetSerializer),
    [BattlefieldStrategySerializer.name]: object(BattlefieldStrategySerializer).construct(
      use(BattlefieldProtocolFactory)
    ),
    [BattlefieldValidator.name]: object(BattlefieldValidator).construct(
      use(BattlefieldValidatorFactory)
    ),
    [BattlefieldMapper.name]: object(BattlefieldMapper).construct(
      use(BattlefieldValidator),
      use(BattlefieldTargetSerializer),
      use(BattlefieldStrategySerializer),
    ),
    [BattlefieldController.name]: object(BattlefieldController).construct(
      use(BattlefieldMapper)
    ),
  });

  return container;
}