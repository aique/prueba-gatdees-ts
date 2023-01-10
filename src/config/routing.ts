import { Express } from "express";
import { IDIContainer } from "rsdi";
import { BattlefieldController } from "../battlefield/controllers/battlefield.controller";

export default function configureRouter(app: Express, diContainer: IDIContainer) {
    const battlefieldController = diContainer.get(BattlefieldController);

    app.route('/radar')
      .post(battlefieldController.actionRadar.bind(battlefieldController));
}