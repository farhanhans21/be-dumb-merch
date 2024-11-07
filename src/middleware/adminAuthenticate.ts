import { NextFunction, Request, Response } from "express";
export const adminAuthenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;

    if (user.role !== "ADMIN") {
      res.status(403).json({ message: "admin only" });
      return;
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "unauthorized" });
  }
};
