import { scheduleApi } from "../../api";
import { PaginatedResponse } from "../../model/PaginatedResponse";
import { Enroll, EnrollDto } from "../models/Enroll";
import { Student, StudentDto } from "../models/Student ";
 

export const SaveStudent = async (student: Student) => {
  const { data } = await scheduleApi.post("/student", student);
  return data as Student;
};

export const DeleteStudent = async (dni: string) => {
  const { data } = await scheduleApi.delete(`/student/${dni}`);
  return data;
};

export const GetAllStudent = async (
  page: number = 0,
  size: number = 10,
  sortBy: string = "userEntity.username",
  direction: string = "asc"
) => {
  const url = `/student?page=${page}&size=${size}&sortBy=${sortBy}&direction=${direction}`;
  const { data } = await scheduleApi.get(url);
  return data as PaginatedResponse<StudentDto>;
};

export const SearchStudentByDni = async (dni: string) => {
  const { data } = await scheduleApi.get(`/student/${dni}`);

  return data as StudentDto;
};

export const UpdateStudentByDni = async (dni: string, student: Student) => {
  const data = await scheduleApi.put(`/student/${dni}`, student);

  return data as Student;
};

export const SaveStudentEnroll = async (enroll: EnrollDto) => {
  const { data } = await scheduleApi.post("/student/enroll", enroll);
  return data as Enroll;
};