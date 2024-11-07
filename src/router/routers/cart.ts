import { Router } from "express";
import { authenticate } from "../../middleware/authenticate";
import * as cartController from "../../controller/cartController"
const CartRouter = Router()

CartRouter.put('/addCart', authenticate,cartController.addCart)
CartRouter. put('/removeCart', authenticate,cartController.removeCart)



export default CartRouter 