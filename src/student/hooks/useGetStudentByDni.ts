import { useQuery } from "@tanstack/react-query";
import { SearchStudentByDni } from "../services";
 ;

export const useGetStudentByDni = (dni: string) => {
  const { data: student, isLoading } = useQuery({
    queryKey: ["student", dni],
    queryFn: () => SearchStudentByDni(dni),
    enabled: dni.length > 0,
  });

  return { isLoading, student };
};