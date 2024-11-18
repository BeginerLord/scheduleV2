export interface CourseEnrollment {
    name: string; // Nombre del curso
    cantHrs: number; // Cantidad de horas
    level: string; // Nivel del curso
    dniProffesor: string; // DNI del profesor
    idHorario: number; // ID del horario
  }
  
  export type CourseEnrollmentDto = Omit<CourseEnrollment, "id">;
  
  export type UpdateCourseEnrollmentDto = Partial<CourseEnrollment>;
  