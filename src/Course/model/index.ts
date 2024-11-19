export interface CourseEnrollment {
  name: string;
  cantHrs: string;
  level: string;
  dniProffesor: string;
  idHorario: string;
}

export type CourseEnrollmentDto = Omit<CourseEnrollment, "id">;

export type UpdateCourseEnrollmentDto = Partial<CourseEnrollment>;
