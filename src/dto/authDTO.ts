import { RoleEnum } from "@prisma/client";

export interface RegisterDTo {
  email: string;
  password: string;
  name: string;
  role: RoleEnum;
}
export type LoginDTO = {
  id: number;
  username: string;
  password: string;
};
