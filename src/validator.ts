import type { NextFunction, Request, Response } from 'express';


/**
 * The middleware should check if the payload valid
 * @param req
 * @param res
 * @param next
 */
export default function validator(req: Request, res: Response, next: NextFunction) {
    try {
        if (req.body.height > 0 && req.body.weight > 0){
            next();}
        }
    catch(err){
        console.log('data is not acceptable', err);
    }
}
