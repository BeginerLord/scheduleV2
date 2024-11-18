export interface Enroll{

    idCurso?: number;

    dni?:string;
}

export type EnrollDto = Omit<Enroll, "id">;
export type UpdateEnrollDto = Partial<Enroll>;