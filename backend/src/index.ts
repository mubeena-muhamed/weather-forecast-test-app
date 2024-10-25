import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.VUE_APP_BACKEND_PORT || 4000;

app.use(cors());
app.use(express.json() as express.RequestHandler);

app.use('/weather', require('./routes/weather.route'));


app.listen(port, async () => {
    console.info(`Express app is running. Listening on port ${port}.`);
});