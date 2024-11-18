import { useQuery } from "@tanstack/react-query";
import { GetAllStudent } from "../services";
import { PaginatedResponse } from "../../model/PaginatedResponse";
import { StudentDto } from "../models/Student ";
 
  
export const useGetAllStudent = (
  page = 0,
  size = 10,
  sortBy = "userEntity.username",
  direction = "asc"
) => {
  const {  data: student,isLoading } = useQuery<PaginatedResponse<StudentDto>>({
    queryKey: ["student", page, size, sortBy, direction],
    queryFn: () => GetAllStudent (page, size, sortBy, direction),
    staleTime: 5000, // keep previous data for 5 seconds
  });

  return {  student ,isLoading};
};