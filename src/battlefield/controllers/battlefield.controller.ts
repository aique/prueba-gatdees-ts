import { Request, Response } from "express";
import { BattlefieldMapper } from "../battlefield.mapper";
import { Battlefield } from "../entity/battlefield";
import { BattlefieldTarget } from "../entity/battlefield.target";
import { IncompatibleProtocolsError } from "../error/battlefield.incompatible-protocols-error";
import { InvalidBattlefieldDescriptionError } from "../error/battlefield.invalid-battlefield-error copy";

export class BattlefieldController {
    private mapper: BattlefieldMapper;

    constructor(mapper: BattlefieldMapper) {
        this.mapper = mapper;
    }
    
    async actionRadar(req: Request, res: Response) {
        try {
            const battlefield: Battlefield = this.mapper.map(req.body);
            const nextTarget: BattlefieldTarget|null = battlefield.nextTarget();

            if (nextTarget) {
                res. status(200).send(JSON.stringify(nextTarget.getCoordinates()));
                return;
            }

            res.status(400).send('Next target not found');
        } catch (err: any) {
            if (err instanceof IncompatibleProtocolsError ||
                err instanceof InvalidBattlefieldDescriptionError)
            {
                res.status(400).send(err.getMessage());
                return;
            }

            res.status(500).send(err.message);
        }
    }
}