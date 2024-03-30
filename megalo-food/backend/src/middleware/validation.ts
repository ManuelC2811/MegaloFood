import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const handleValidationErrors = async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

export const validateMyUserRequest = [
    body("name").isString().notEmpty().withMessage("Nombre debe ser de tipo String"),
    body("addressLine1").isString().notEmpty().withMessage("Dirección debe ser de tipo String"),
    body("city").isString().notEmpty().withMessage("Ciudad debe ser de tipo String"),
    body("country").isString().notEmpty().withMessage("País debe ser de tipo String"),
    handleValidationErrors,
];