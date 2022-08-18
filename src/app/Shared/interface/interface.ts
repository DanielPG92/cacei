export interface Usuario{
    name: string;
    email: string;
  }
  
  export interface AuthResponse{
    ok: boolean,
    email?: string,
    name?: string,
    token?: string,
    msg?: string
  }