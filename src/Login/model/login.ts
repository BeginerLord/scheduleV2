export interface Login {
    username: string;
    password: string;
  }
  export type LoginDto = Omit<Login, "id">;