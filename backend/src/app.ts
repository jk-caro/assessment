// #================#================# Required External Modules #================#================#

 import express from "express";
import cookieParser from "cookie-parser";
import path from "path"
import cors from "cors";
import helmet from "helmet";
import mongoose from 'mongoose';
import { UserModel } from "./models/user-model";

// #================#================# App Variables #================#================#

const app = express();
const compression = require('compression');
import { indexRouter } from './routes/index';

// // #================#================# App Configuration #================#================#

console.log('Connecting to db');
mongoose.connect("mongodb://0.0.0.0:27017/demo")
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((err) => {
      console.log(err)
        console.log('Error connecting to MongoDB');
    })

app.use(compression())
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));


app.enable('trust proxy');
app.disable('x-powered-by')

app.use(cookieParser('ASDfghJKl123'));

app.use('/', indexRouter);

// #================#================# Server Activation #================#================#
const server = app.listen(80, 'localhost', () => {
  console.log('Application URL:- locahost:80' );
})
