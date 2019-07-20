import mysql = require('mysql');

export default class DbContext
{
    private static _instance : DbContext;

    cnn: mysql.Connection;

    conectado : boolean = false;

    constructor() {
        
        console.log('Clase inicializada');

        this.cnn = mysql.createConnection({
            host:'localhost',
            user:'c1340393',
            password:'wakaLA75bi',
            database:'node_db'
        });

        this.conectarDb();
        
    }

    public static get instance()
    {

        return this._instance || (this._instance = new this());

    }

    static query(query : string, callback : Function)
    {

        
        this.instance.cnn.query(query, (error, results : Object[], fields) => {

            if (error) 
            {
                console.error(error);
                return callback(error);
            }

            callback(null, results);
            
        });



    }

    private conectarDb() {
        this.cnn.connect((err:mysql.MysqlError) => {
            if (err)
            {
                console.error(err);  
            }

            this.conectado = true;
            console.log('Base de datos online.');
            
            
        });
    }



}