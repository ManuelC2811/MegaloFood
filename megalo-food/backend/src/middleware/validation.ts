import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const handleValidationErrors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateMyUserRequest = [
  body("name")
    .isString()
    .notEmpty()
    .withMessage("Nombre debe ser de tipo String"),
  body("addressLine1")
    .isString()
    .notEmpty()
    .withMessage("Dirección debe ser de tipo String"),
  body("city")
    .isString()
    .notEmpty()
    .withMessage("Ciudad debe ser de tipo String"),
  body("country")
    .isString()
    .notEmpty()
    .withMessage("País debe ser de tipo String"),
  handleValidationErrors,
];

export const validateMyRestaurantRequest = [
  body("restaurantName")
    .notEmpty()
    .withMessage("El nombre del restaurante es requerido"),
  body("city").notEmpty().withMessage("El nombre de la ciudad es requerido"),
  body("country").notEmpty().withMessage("el nombre del país es requerido"),
  body("deliveryPrice")
    .isFloat({ min: 0 })
    .withMessage(
      "El precio del envío es requerido y debe ser un número positivo"
    ),
  body("estimatedDeliveryTime")
    .isInt({ min: 0 })
    .withMessage(
      "El tiempo estimado de entrega es requerido y debe ser un número entero positivo"
    ),
  body("cuisines")
    .isArray()
    .withMessage("Platos deben ser un array")
    .not()
    .isEmpty()
    .withMessage("El arreglo de platos no puede estar vacío"),
  body("menuItems")
    .isArray()
    .withMessage("Los items del menú deben ser un array"),
  body("menuItems.*.name")
    .notEmpty()
    .withMessage("El nombre del item del menu es requerido"),
  body("menuItems.*.price")
    .isFloat({ min: 0 })
    .withMessage(
      "El precio del item del menu es requerido y debe ser positivo"
    ),
  body("menuItems.*.description")
    .notEmpty()
    .withMessage("La descripcion del item es requerida"),
  handleValidationErrors,
];
