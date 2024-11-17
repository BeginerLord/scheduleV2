import { useQuery } from "@tanstack/react-query";
import { PaginatedResponse } from "../../model/PaginatedResponse"; 
import { GetAllDocent } from "../services";
import { DocentDto } from "../model/docent";

export const useGetAllDocent = (
  page: number = 0,
  size: number = 10,
  sortBy: string = "userEntity.username",
  direction: string = "asc"
) => {
  const { isLoading, data, isError, error } = useQuery<PaginatedResponse<DocentDto>>({
    queryKey: ["docent", page, size, sortBy, direction],
    queryFn: () => GetAllDocent(page, size, sortBy, direction),
    staleTime: 5000, // Mantener datos frescos durante 5 segundos
  });

  return { isLoading, docent: data, isError, error };
};
