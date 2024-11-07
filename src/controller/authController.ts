import { Request, Response } from "express";
import { LoginDTO, RegisterDTo } from "../dto/authDTO";

import * as authService from "../service/authService";

export const register = async (req: Request, res: Response) => {
  try {
    const bodyRegis = req.body as RegisterDTo;
    const register = await authService.register(bodyRegis);

    res.status(201).json({ register });
  } catch (error) {
    console.log(error);

    const err = new Error();
    res.status(500).json({ massage: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const bodyLogin = req.body as LoginDTO;

    const token = await authService.login(bodyLogin);

    res.status(200).json({token});
  } catch (error) {
    console.log(error);
    const err = new Error();
    res.status(500).json({ massage: err.message });
  }
};
export const authCheck = async (req: Request, res: Response) => {
  try {
    const user = res.locals.user;
    res.status(200).json({user});
  } catch (error) {
    console.log(error);
    
  }
}