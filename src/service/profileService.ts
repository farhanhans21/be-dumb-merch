import * as profileRepo from "../repository/profileRepo"

import { UpdateProfileDTO } from "../dto/profileDTO";
import uploader from "../libs/cloudinary";

export const updateProfile = async (body: UpdateProfileDTO, userId: number) => {
  await Promise.all(
    Object.entries(body).map(async([key, value])=>{
      if (typeof value !== "string") {
        const url = (await uploader(value)) [0].imageUrl

        body[key] = url;
      }
    })
  )
  return profileRepo.updateProfile(body, userId)
}