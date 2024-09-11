import { body,validationResult,check} from "express-validator";
import { ErrorHandler } from "../utils/utility.js";

const validateHandler =(req,res,next) =>{
    const errors = validationResult(req);

    const errorMessages = errors.array().map((error) => error.msg).join(",");

    if(errors.isEmpty()) return next();
    else next(new ErrorHandler(errorMessages,400))
}

const registerValidator = () =>[body("name","Please Enter Name").notEmpty(),
    body("username","Please Enter Username").notEmpty(),
    body("bio","Please Enter Bio").notEmpty(),
    body("password","Please Enter Password").notEmpty(),
    check("avatar","Please Upload Avatar").notEmpty(),
];

const loginValidator = () =>[
    body("username","Please Enter Username").notEmpty(),
    body("password","Please Enter Password").notEmpty(),
];

const newGroupValidator = () =>[
    body("name","Please Enter Name").notEmpty(),
    body("members","Please Enter Members").notEmpty().withMessage("Please Enter Members")
    .isArray({min:2,max:100}).withMessage("Members must be 2-100"),
];

const addMemberValidator = () =>[
    body("chatId","Please Enter Chat Id").notEmpty(),
    body("members","Please Enter Members").notEmpty().withMessage("Please Enter Members")
    .isArray({min:1,max:97}).withMessage("Members must be 1-97"),
];

const removeMemberValidator = () =>[
    body("chatId","Please Enter Chat Id").notEmpty(),
    body("userId","Please Enter User Id").notEmpty(),
];

export{registerValidator,validateHandler,loginValidator,newGroupValidator,
    addMemberValidator,removeMemberValidator
};