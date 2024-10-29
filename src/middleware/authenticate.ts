import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //ambil token
    const auth = req.headers.authorization;
    // check authorization

    if (!auth) {
      res.status(401).json({ message: "unauthorized" });
      return;
    }
    //mengambil token
    const token = auth.split(" ")[1];

    if (!token) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
    // verification token
    const decode = jwt.verify(
      token,
      process.env.JWT_SECRET || "your-secret-key"
    );

    if (!decode) {
      res.status(401).json({ message: "unauthorized" });
      return;
    }
    res.locals.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "unauthorized" });
  }
};
