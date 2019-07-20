import express = require('express');
import path = require('path');

export default class Server
{

    public app: express.Application;    
    public port: number;

    constructor(puerto:number)
    {
         this.port = puerto;
         this.app = express();
    }

    static init(puerto: number)
    {
        return new Server(puerto);
    }

    private public_folder()
    {
        const public_path = path.resolve(__dirname, '../public');
        this.app.use(express.static(public_path));
    }
    
    start(callback : Function)
    {
        this.app.listen(this.port, callback());
        this.public_folder();
    }
    
}