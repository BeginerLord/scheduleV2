export interface Course {
  id: number; // ID del docente
  name: string; // Nombre del docente
  cantHrs: number; // Cantidad de horas
  level: string; // Nivel del curso
  docenteCedula: string; // Cédula del docente
  codigoHorario: string; // Código de horario
  fullName: string; // Nombre completo del docente
  correo: string; // Correo electrónico del docente
  dniProffesor: string
  idHorario: string

}
export type CoursetDto = Omit<Course, "id">;
export type UpdateCourseDto = Partial<Course>;
