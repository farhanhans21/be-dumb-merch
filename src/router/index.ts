import { Request, Response, Router } from "express";
import authRouter from './routers/auth'
import profileRouter from "./routers/profile";
const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hallo world')
})

router.use('/auth',authRouter)
router.use('/profile',profileRouter)

export default router;