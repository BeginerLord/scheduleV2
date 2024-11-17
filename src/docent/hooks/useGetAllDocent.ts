import { useQuery } from "@tanstack/react-query";
import { PaginatedResponse } from "../../model/PaginatedResponse";
import { DocentDto } from "../model/docent";
import { GetAllDocent } from "../services";
 
export const useGetAllDocent = (
  page = 0,
  size = 10,
  sortBy = "name",
  direction: "asc"
) => {
  const { data: docent, isLoading } = useQuery<PaginatedResponse<DocentDto>>({
    queryKey: ["docent", page, size, sortBy, direction],
    queryFn: () => GetAllDocent(page, size, sortBy, direction),
    staleTime: 5000,
  });
  return { docent, isLoading };
};