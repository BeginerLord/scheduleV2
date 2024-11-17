import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DocentDto } from "../model/docent";
import { UpdateDocentByDni } from "../services";

export const useUpdateDocent = () => {
  const queryClient = useQueryClient();

  const { mutate: updateDocentMutation, isPending } = useMutation({
    mutationFn: ({ dni, schedule }: { dni: number; schedule: DocentDto }) =>
      UpdateDocentByDni(dni, schedule),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["docent"] }); // Actualiza el cache
    },
  });

  return { updateDocentMutation, isPending };
};
