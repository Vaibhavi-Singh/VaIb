import jwt from 'jsonwebtoken';
import { ErrorHandler } from '../utils/utility.js';
import {TryCatch} from './error.js'

const isAuthenticated = (req,res,next) => {
    const token = req.cookies["VAIB-token"];

    if(!token) return next(new ErrorHandler("Please login to access this route",401));

    const decodeData = jwt.verify(token,process.env.JWT_SECRET);

    req.user = decodeData._id;
    next();
};

export {isAuthenticated};