// #================#================# Required External Modules and Interfaces #================#================#

import express, { Request, Response, NextFunction } from "express";
const mongoose = require('mongoose');
import { UserModel } from "../models/user-model";
// #================#================# Service Definition #================#================#

// #================#================# Router Definition #================#================#

export const indexRouter = express.Router();

// #================#================# Controller Definitions #================#================#
indexRouter.route('')
  .get(async function (req: Request, res: Response, next: NextFunction) {
    var data = {
      'status': 'success',
      'msg': 'API Working Fine'
    }
    res.status(200).json(data);
  })


indexRouter.route('/users/:role?/')
  .get(function (req: Request, res: Response, next: NextFunction) {
    var role = [1,2,3]
    var q = ''
    if (req.params.role) { role = [req.params.role] }
    if (req.query.q) { q = req.query.q }
    UserModel.find({
      $or:[{
        firstName:{ $regex: q }
      },{
        lastName:{ $regex: q }
      },{
        email:{ $regex: q }
      }],
      $and:[
        {
          role: {"$in" : role}  
        }
      ]
    })
      .then((result) => {
        var data = {
          'status': 'success',
          'msg': '',
          'users': result
        }
        res.status(200).json(data);
      })
      .catch((err) => {
        var data = {
          'status': 'failed',
          'msg': err
        }
        res.status(200).json(data);
      });
  })

indexRouter.route('/signin/')
  .post(function (req: Request, res: Response, next: NextFunction) {
    const input = req.body;
    UserModel.findOne({ email: input.email, password: input.password })
      .then((result) => {
        var data = {
          'status': false,
          'msg': 'Invalid Username Password'
        }
        if (result){
          data = {
            'status': true,
            'msg': result
          }
        }
        res.status(200).json(data);
      })
      .catch((err) => {
        var data = {
          'status': 'failed',
          'msg': err
        }
        res.status(200).json(data);
      });
  })

indexRouter.route('/signup/')
  .post(function (req: Request, res: Response, next: NextFunction) {
    const input = req.body;
    const user = new UserModel({
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      password: input.password,
      mobile: input.mobile,
      role: input.role
    });
    Promise.all([
      user.save()
    ])
      .then((result: any) => {
        var data = {
          'status': 'success',
          'msg': 'New user added successfully'
        }
        res.status(200).json(data);
      }).catch((err) => {
        var data = {
          'status': 'failed',
          'msg': err
        }
        res.status(200).json(data);
      });
  })