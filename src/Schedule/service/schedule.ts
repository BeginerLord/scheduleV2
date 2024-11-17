import { scheduleApi } from "../../api";
import { PaginatedResponse } from "../../model/PaginatedResponse";
import { Schedule, ScheduleDto } from "../model/schedule";
import { ScheduleStudent } from "../model/ScheduleStudent";

export const GetScheduleStudent = async () => {
    const { data } = await scheduleApi.get("/schedule/student/schedule");
  
    return data[0] as ScheduleStudent;
  };
  
  export const CreateSchedule = async (schedule: ScheduleDto) => {
    const { data } = await scheduleApi.post("/schedule", schedule);
  
    return data as Schedule;
  };
  
  // Actualizar un horario
  export const UpdateSchedule = async ({
    id,
    schedule,
  }: {
    id: number;
    schedule: ScheduleDto;
  }) => {
    const { data } = await scheduleApi.put(`/schedule/${id}`, schedule);
    return data as Schedule;
  };
  
  // Eliminar un horario
  export const deleteSchedule = async (id: number) => {
    const { data } = await scheduleApi.delete(`/schedule/${id}`);
    return data;
  };
  
  // Obtener un horario por ID
  export const GetScheduleById = async (id: number) => {
    const { data } = await scheduleApi.get(`/schedule/${id}`);
    return data as Schedule;
  };
  
  export const GetScheduleDocent = async () => {
    const { data } = await scheduleApi.get("/professor/schedule");
  
    return data[0] as ScheduleStudent;
  };
  
  export const GetAllSchedule = async(
    page: number = 0,
    size: number = 10,
    sortBy: string = "scheduleName",
    direction: string = "asc"
  ) =>{
    const url = `/schedule?page=${page}&size=${size}&sortBy=${sortBy}&direction=${direction}`;
  
    const{data}= await scheduleApi.get(url);
    return data as PaginatedResponse<ScheduleDto>;
  }