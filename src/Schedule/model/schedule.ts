export interface Schedule {
    startTime: string;  // Representando la fecha y hora de inicio
    endTime: string;    // Representando la fecha y hora de finalización
    room: string;       // El nombre de la sala
    day: string;        // El día de la semana
  }
  
  export type ScheduleDto = Omit<Schedule, "id">;
  export type UpdateScheduleDto = Partial<Schedule>;