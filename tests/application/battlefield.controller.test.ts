import { getMockReq, getMockRes } from '@jest-mock/express'
import { BattlefieldMapper } from "../../src/battlefield/battlefield.mapper";
import { BattlefieldController } from "../../src/battlefield/controllers/battlefield.controller";
import { BattlefieldTargetSerializer } from "../../src/battlefield/serialization/battlefield.target-serializer";
import { BattlefieldValidatorFactory } from "../../src/battlefield/validation/battlefield.factory";
import { BattlefieldValidator } from "../../src/battlefield/validation/battlefield.validator";
import { BattlefieldDataGenerator } from '../src/battlefield.data-generator';

describe("Battlefield controller validation", () => {
    const controller: BattlefieldController = new BattlefieldController(
        new BattlefieldMapper(
            new BattlefieldValidator(
                new BattlefieldValidatorFactory()
            ),
            new BattlefieldTargetSerializer()
        )
    );
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
        expect(res.send).toHaveBeenCalledWith('');
    });
});