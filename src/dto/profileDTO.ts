export interface UpdateProfileDTO extends Record<string, any> {
  firstName: string;
  lastName: string;
  address?: string;
  phone?: string;
  gender?: string;
  image?: string | { [key: string]: Express.Multer.File[] };
  createAt?: Date;
  updateAt?: Date;
}
export interface GetProfile {
  fullName?: string;
  address?: string;
  phone?: string;
  gender?: string;
  image?: string | { [key: string]: Express.Multer.File[] };
}
