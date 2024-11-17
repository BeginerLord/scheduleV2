import { scheduleApi } from "../../api";
import { PaginatedResponse } from "../../model/PaginatedResponse";
import { Docent, DocentDto } from "../model/docent";
 
export const SaveDocent = async (docent: DocentDto) => {
  const { data } = await scheduleApi.post("/teacher", docent);
  return data as Docent;
};

export const DeleteDocent = async (dni: string) => {
  const { data } = await scheduleApi.delete(`/teacher/${dni}`);
  return data;
};

export const GetAllDocent = async (
  page: number = 0,
  size: number = 10,
  sortBy: string = "userEntity.username",
  direction: string = "asc"
): Promise<PaginatedResponse<DocentDto>> => {
    
  const url = `/teacher?page=${page}&size=${size}&sortBy=${sortBy}&direction=${direction}`;
  
  const { data } = await scheduleApi.get(url); // Asegúrate de que 'scheduleApi' esté configurado correctamente
  return data as PaginatedResponse<DocentDto>;
};





export const SearchDocentByDni = async (dni: string) => {
  const { data } = await scheduleApi.get(`/teacher/${dni}`);

  return data as DocentDto;
};

export const UpdateDocentByDni = async (dni:number, docent:DocentDto) => {
  const { data } = await scheduleApi.put(`/teacher/${dni}`, docent);

  return data as Docent;
};