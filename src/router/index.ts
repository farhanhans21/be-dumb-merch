import { Request, Response, Router } from "express";
import authRouter from './routers/auth'
import profileRouter from "./routers/profile";
import categoryRouter from "./routers/category";
import productRouter from "./routers/product";
import CartRouter from "./routers/cart";
const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hallo world')
})

router.use('/auth',authRouter)
router.use('/profile',profileRouter)
router.use('/category',categoryRouter)
router.use('/product',productRouter)
router.use('/cart', CartRouter)
export default router;