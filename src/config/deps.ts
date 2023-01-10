import DIContainer, { IDIContainer, object, use } from "rsdi";
import { BattlefieldController } from "../battlefield/controllers/battlefield.controller";
import { BattlefieldMapper } from "../battlefield/battlefield.mapper";

export default function configureDI(): IDIContainer {
  const container: DIContainer = new DIContainer();
  container.add({
    [BattlefieldMapper.name]: object(BattlefieldMapper),
    [BattlefieldController.name]: object(BattlefieldController).construct(
      use(BattlefieldMapper)
    ),
  });

  return container;
}