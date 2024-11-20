import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteDocent } from "../services";

export const useDeleteDocent = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteDocentMutate, isPending,isError, error, isSuccess } = useMutation({
    mutationFn: DeleteDocent,

    onSuccess: () => {
      // Invalida la caché de la consulta para 'docent' después de la mutación
      queryClient.invalidateQueries({ queryKey: ["docent"] });

      // Muestra una alerta de éxito
      alert("Docente eliminado con éxito.");
    },

    onError: () => {
      // Muestra una alerta de error si la eliminación falla
      alert("Error al eliminar el docente esta relacionado con cursos.");
    },
  });

  return { deleteDocentMutate, isPending,isError, error,isSuccess };
};
