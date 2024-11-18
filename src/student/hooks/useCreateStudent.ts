import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SaveStudent } from "../services";

export const useCreateStudent = () => {
  const queryClient = useQueryClient();

  const { mutate: createStudentMutation, isPending } = useMutation({
    mutationFn: SaveStudent,
    onSuccess: () => {
      // Invalida la caché de la consulta para 'student' después de la mutación
      queryClient.invalidateQueries({ queryKey: ["student"] });
      alert("Estudiante creado con éxito.");
    },
    onError: () => {
      alert("Error al crear el estudiante.");
    },
  });

  return { createStudentMutation, isPending };
};
