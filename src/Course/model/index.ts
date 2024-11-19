export interface CourseEnrollment {
  name: string;
  cantHrs: number; // Cambiado a number
  level: string;
  dniProffesor: string;
  idHorario: string;
}

export type CourseEnrollmentDto = Omit<CourseEnrollment, "id">;

export type UpdateCourseEnrollmentDto = Partial<CourseEnrollment>;
