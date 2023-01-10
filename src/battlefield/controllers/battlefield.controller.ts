import { Request, Response } from "express";
import { BattlefieldMapper } from "../battlefield.mapper";
import { Battlefield } from "../entity/battlefield";
import { BattlefieldTarget } from "../entity/battlefield.target";

export class BattlefieldController {
    private mapper: BattlefieldMapper;

    constructor(mapper: BattlefieldMapper) {
        this.mapper = mapper;
    }
    
    public async actionRadar(req: Request, res: Response) {
        try {
            let battlefield: Battlefield = this.mapper.map(req.body);
            let nextTarget: BattlefieldTarget|null = battlefield.nextTarget();

            if (nextTarget) {
                res. status(200).send('');
                return;
            }

            res.status(400).send('Next target not found');
        } catch (err: any) {
            res.status(500).send(err.message);
        }
    }
}