import { useQuery } from "@tanstack/react-query";
import { SearchDocentByDni } from "../services";

export const useGetDocentByDni = (dni: string) => {
  const { data: docent, isLoading } = useQuery({
    queryKey: ["docent", dni],
    queryFn: () => SearchDocentByDni(dni),
    enabled: !!dni,
  });

  return { docent, isLoading };
};
