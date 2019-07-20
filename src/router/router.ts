import { Router, Request, Response } from 'express';
import DbContext from '../mysql/mysql';

const router = Router();

router.get('/heroes', (request : Request, response : Response) => {
    
    const query = `
        select *
        from heroes
    `;

    DbContext.query(query, (error : any, result : Object[]) => {
        if (error)
        {
            return response.status(400).json({
                ok:false,
                error
            });

        }

        return response.json({
            ok: true,
            result
        });

    });

});

router.get('/heroes/:id', (request : Request, response : Response) => {

    const id = request.params.id;
    const id_escapado = DbContext.instance.cnn.escape(id);

    const query = `
        select *
        from heroes
        where id = ${id_escapado}
    `;
    
    DbContext.query(query, (error : any, result : Object[]) => {
        if (error)
        {
            return response.status(400).json({
                ok:false,
                error
            });

        }

        return response.json({
            ok: true,
            result : result[0]
        });
    });

});

export default router;