import { useQuery } from "@tanstack/react-query";
import { PaginatedResponse } from "../../model/PaginatedResponse";
import { CourseEnrollmentDto } from "../model";
import { GetAllCourses } from "../service";

export const useGetAllCourse = (
    page = 0,
    size = 10,
    sortBy = "name",
    direction = "asc"
  ) => {
    const { isLoading, data: course } = useQuery<PaginatedResponse<CourseEnrollmentDto>>({
      queryKey: ["course", page, size, sortBy, direction],
      queryFn: () => GetAllCourses(page, size, sortBy, direction),
      staleTime: 5000, // keep previous data for 5 seconds
    });
  
    return { isLoading, course };
  };
  