import express from 'express';
import bodyParser from "body-parser";
import bmi from "./bmi";

const app = express();

app.use(bodyParser.json());
// TODO implement me :)
app.post('/bmi', (req,res) => {
    let data = req.body;
    let bmiInput = {
        height: +data.height!,
        heightUnit: +data.heightUnit!,
        weight: +data.weightUnit!,
        weightUnit: +data.weightUnit!
    }
    res.send(bmi(bmiInput));
})

app.get('/bmi', (req, res ) => {
    let data = req.query
    let inputObj = {
        height : +req.query.height!,
        heightUnit : +req.query.heighUnit!,
        weight: +req.query.weight!,
        weightUnit: +req.query.weightUnit!
    }
    res.send(bmi(inputObj));
})

export default app;
