import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';

class App {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.start();
    }

    middlewares() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    routes() {
        this.app.use(
            '/api/v1', () => {}
        );
    }

    async start() {
        this.app.listen(process.env.PORT || 3000, () => {
                    console.log(
                        `Aplicação em execução na porta ${process.env.PORT || 3000}`,
                    );
                });
    };
}

export default new App().app;