import { getMockReq, getMockRes } from '@jest-mock/express'
import { BattlefieldController } from "../../src/battlefield/controllers/battlefield.controller";
import { BattlefieldDataGenerator } from '../src/battlefield.data-generator';
import { IDIContainer } from 'rsdi';
import configureDI from "../../src/config/deps";

const container: IDIContainer = configureDI();

describe("Battlefield controller validation", () => {
    const controller: BattlefieldController = container.get(BattlefieldController);

    test('invalid input should return 500 response code', async () => {
        const req = getMockReq();
        const { res, next } = getMockRes();

        req.body = '{}';

        await controller.actionRadar(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith('Invalid battlefield info');
    });

    test('valid data should return 200 response code', async () => {
        const req = getMockReq();
        const { res, next } = getMockRes();
        
        req.body = BattlefieldDataGenerator.getValidData();

        await controller.actionRadar(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith('{"x":0,"y":40}');
    });
});