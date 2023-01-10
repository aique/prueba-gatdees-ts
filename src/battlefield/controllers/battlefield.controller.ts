import { Request, Response } from "express";
import { BattlefieldMapper } from "../battlefield.mapper";

export class BattlefieldController {
    private mapper: BattlefieldMapper;

    constructor(mapper: BattlefieldMapper) {
        this.mapper = mapper;
    }
    
    public async actionRadar(req: Request, res: Response) {
        try {
            this.mapper.map(req.body);
            res.status(200).send('');
        } catch (err: any) {
            res.status(500).send(err.message);
        }
    }
}