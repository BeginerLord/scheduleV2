export interface Model1 {
    name: string;
    cantHrs: number;
    level: string;
    dniProffesor: string;
    id:string;
    idHorario: number;
  }
  export type Model1Dto = Omit<Model1, "id">;
  
  export type UpdateModel1Dto = Partial<Model1>;
  