import { Request, Response } from "express";
import { BattlefieldMapper } from "../battlefield.mapper";

export class BattlefieldController {
    private mapper: BattlefieldMapper;

    constructor(mapper: BattlefieldMapper) {
        this.mapper = mapper;
    }
    
    public async actionRadar(req: Request, res: Response) {
        this.mapper.map(req.body);
        res.status(200).send('');
    }
}