import { scheduleApi } from "../../api";
import { PaginatedResponse } from "../../model/PaginatedResponse";
import { CourseEnrollment, CourseEnrollmentDto } from "../model";
import { CoursetDto } from "../model/coursedos";

export const SaveCourse = async (courses: CourseEnrollmentDto) => {
    const { data } = await scheduleApi.post("/courses", courses);
    return data as CourseEnrollment;
  };
  
  export const DeleteCourse = async (name: string) => {
    const { data } = await scheduleApi.delete(`/courses/${name}`);
    return data;
  };
  export const GetAllCourses = async (
    page: number = 0,
    size: number = 10,
    sortBy: string = "name",
    direction: string = "asc"
  ) => {
    const url = `/courses?page=${page}&size=${size}&sortBy=${sortBy}&direction=${direction}`;
    const { data } = await scheduleApi.get(url);
    return data as PaginatedResponse<CoursetDto>;
  };
  
  export const SearcCourseByName = async (name: string) => {
    const { data } = await scheduleApi.get(`/courses/${name}`);
  
    return data as CourseEnrollmentDto;
  };
  
  export const UpdateCourseByName = async (name:string, courses:CourseEnrollment) => {
    const { data } = await scheduleApi.put(`/courses/${name}`, courses);
    return data as CourseEnrollment;
  };