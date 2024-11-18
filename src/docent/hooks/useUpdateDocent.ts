import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Docent } from "../model/docent";
import { UpdateDocentByDni } from "../services";

export const useUpdateDocent = () => {
  const queryClient = useQueryClient();

  const { mutate: updateDocentMutation, isPending } = useMutation({
    mutationFn: ({ dni, docent }: { dni: string; docent: Docent }) => UpdateDocentByDni(dni, docent),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["docent"] }); // Actualiza el cache
    },
  });

  return { updateDocentMutation, isPending };
};
