export interface Course {

  id: string;
  name: string;
  cantHrs: string;
  level: string;
  docenteCedula: string;
  codigoHorario: string;
  fullName: string;
  correo: string;
  
  }
  export type CoursetDto = Omit<Course, "">;
  export type UpdateCourseDto = Partial<Course>;