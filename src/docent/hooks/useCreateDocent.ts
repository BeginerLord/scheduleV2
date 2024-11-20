import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SaveDocent } from "../services";

export const useCreateDocent = () => {
  const queryClient = useQueryClient();

  const { mutate: createDocentMutation, isPending, isError, error, isSuccess  } = useMutation({
    mutationFn: SaveDocent,

    onSuccess: () => {
      // Invalida la caché de la consulta para 'docent' después de la mutación
      queryClient.invalidateQueries({ queryKey: ["docent"] });

      // Muestra una alerta de éxito
      alert("Docente creado con éxito.");
    },

    onError: () => {
      // Muestra una alerta de error si la creación falla
      alert("Error al crear el docente.");
    },
  });

  return { createDocentMutation, isPending, isError, error, isSuccess  };
};
