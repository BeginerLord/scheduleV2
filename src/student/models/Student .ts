export interface Student {
    description?: string;
    carrer?: string;
    username?: string;
    fullName?: string;
    dni?: string;
    phoneNumber?: string;
    address?: string;
    email?: string;
    password?: string;
  }
  
  export type StudentDto = Omit<Student, "id">;
  export type UpdateStudentDto = Partial<Student>;