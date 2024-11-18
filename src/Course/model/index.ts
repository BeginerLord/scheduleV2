export interface CourseEnrollment {
  id:string; 
  name: string; // Nombre del curso
    cantHrs: number; // Cantidad de horas
    level: string; // Nivel del curso

  }
  
  export type CourseEnrollmentDto = Omit<CourseEnrollment, "id">;
  
  export type UpdateCourseEnrollmentDto = Partial<CourseEnrollment>;
  