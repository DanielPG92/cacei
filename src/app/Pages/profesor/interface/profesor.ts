// export interface Profesor{
//     idProfesor: string;
//     NombreCompleto: string;
//     Edad: number;
//     Licenciatura: string;
//     Nolicenciatura: string;
//     Especialidad: string;
//     NoEspecialidad: string;
//     Maestria: string;
//     NoMaestria: string;
//     Doctorado: string;
//     NoDoctorado: string;
//   }


  export class Profesor{
    idProfesor= "";
    NombreCompleto= "";
    Edad = 0;
    Licenciatura="";
    Nolicenciatura="";
    Especialidad="";
    NoEspecialidad="";
    Maestria="";
    NoMaestria="" ;
    Doctorado= "";
    NoDoctorado= "";
  }

  export interface Consulta{
    Licenciatura: string,
    Perido: string
  }

  export interface HorarioOmar{
    Hora_visita:string,
    idHorario:number,
    Fecha:string,
    otrodato?:string,
  }
  