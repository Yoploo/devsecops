import { Request, Response } from 'express';
import { Router } from 'express';



export class IndexController {
    public getIndex(req: Request, res: Response): void {
        res.send('Hello, World!');
    }
}