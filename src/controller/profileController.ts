import { Request, Response } from "express";
import { UpdateProfileDTO } from "../dto/profileDTO";
import * as profileService from "../service/profileService";
export const update = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user.id;
    const body: UpdateProfileDTO = req.body;
    if (req.files) {
      const files = req.files as { [key: string]: Express.Multer.File[] };
      Object.keys(files).map((key) => {
        body[key] = files[key];
      });
    }
    
    const profile = await profileService.updateProfile(body, userId);

    res.status(200).json({ profile });
  } catch (error) {
    console.log(error);
    const err = new Error();
    res.status(500).json({ massage: err.message });
  }
};
