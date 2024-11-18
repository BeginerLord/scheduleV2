import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Docent } from "../model/docent";
import { UpdateDocentByDni } from "../services";

export const useUpdateDocent = () => {
  const queryClient = useQueryClient();

  const { mutate: updateDocentMutation, isPending } = useMutation({
    mutationFn: ({ dni, docent }: { dni: string; docent: Docent }) =>
      UpdateDocentByDni(dni, docent),

    onSuccess: () => {
      // Invalida la caché de la consulta para 'docent' después de la mutación
      queryClient.invalidateQueries({ queryKey: ["docent"] });

      // Muestra una alerta de éxito
      alert("Docente actualizado con éxito.");
    },

    onError: () => {
      // Muestra una alerta de error si la actualización falla
      alert("Error al actualizar el docente.");
    },
  });

  return { updateDocentMutation, isPending };
};
