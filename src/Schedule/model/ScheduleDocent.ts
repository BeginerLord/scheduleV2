export interface ScheduleDocent {
  id: number;
  courseName: string;
  courseHours: number;
  level: string;
  professorName: string;
  startTime: string;
  endTime: string;
  room: string;
  day: string;
}

export type ScheduleDocentDTO = Partial<ScheduleDocent>;
