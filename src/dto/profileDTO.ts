
export interface UpdateProfileDTO extends Record<string, any> {
  username?: string
  firstName?: string;
  lastName?: string;
  address?: string;
  phone?: string;
  gender?: string;
  image?: string | { [key: string]: Express.Multer.File[] };
  createAt?: Date;
  updateAt?: Date;
}
