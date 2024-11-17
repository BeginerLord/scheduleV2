import { useQuery } from "@tanstack/react-query";
import { PaginatedResponse } from "../../model/PaginatedResponse"; // Ajusta según tu estructura
import { GetAllDocent } from "../services";
import { DocentDto } from "../model/docent";
 
export const useGetAllDocent = ( page = 0,
    size = 10,
    sortBy = "userEntity.username",
    direction = "asc",
   ) => {
    const { isLoading, data: priorities } = useQuery<PaginatedResponse<DocentDto>>({
      queryKey: ["docent", page, size, sortBy, direction],
      queryFn: () => GetAllDocent(page, size, sortBy, direction),
      staleTime: 5000, // keep previous data for 5 seconds
    });
  
    return { isLoading, priorities };
};
