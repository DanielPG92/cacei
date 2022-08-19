export interface Usuario{
    idProfesor: string;
    NombreCompleto: string;
  }
  
  export interface AuthResponse{
    ok: boolean,
    msg?: string,
    NombreCompleto?: string,
    idProfesor?: string,
    token?: string,
   
  }