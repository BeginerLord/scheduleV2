import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteStudent } from "../services";

export const useDeleteStudent = () => {
  const queryClient = useQueryClient();

  // Hook que utiliza useMutation para realizar la mutación de eliminación
  const { mutate: deleteStudentMutation, isPending } = useMutation({
    mutationFn: DeleteStudent,

    onSuccess: () => {
      // Invalida las consultas relacionadas con 'student' después de la eliminación
      queryClient.invalidateQueries({ queryKey: ["student"] });

      // Muestra una alerta de éxito
      alert("Estudiante eliminado con éxito.");
    },

    onError: () => {
      // Muestra una alerta de error si la eliminación falla
      alert("Error al eliminar el estudiante.");
    },
  });

  return { deleteStudentMutation, isPending };
};
