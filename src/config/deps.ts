import DIContainer, { IDIContainer, object, use } from "rsdi";
import { BattlefieldController } from "../battlefield/controllers/battlefield.controller";
import { BattlefieldMapper } from "../battlefield/battlefield.mapper";
import { BattlefieldValidator } from "../battlefield/battlefield.validator";

export default function configureDI(): IDIContainer {
  const container: DIContainer = new DIContainer();
  container.add({
    [BattlefieldValidator.name]: object(BattlefieldValidator),
    [BattlefieldMapper.name]: object(BattlefieldMapper).construct(
      use(BattlefieldValidator)
    ),
    [BattlefieldController.name]: object(BattlefieldController).construct(
      use(BattlefieldMapper)
    ),
  });

  return container;
}