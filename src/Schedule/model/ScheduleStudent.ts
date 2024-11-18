export interface ScheduleStudent{
    id: number;
    courseName: string;
    courseHours: number;
    courseLevel: string;
    docentName: string;
    startTime: string;
    endTime: string;
    room: string;
    day: string;
}

export type ScheduleStudentDTO = Partial<ScheduleStudent>