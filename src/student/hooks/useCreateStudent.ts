import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SaveStudent } from "../services";
 
export const useCreateStudent = () => {
  const queryClient = useQueryClient();

  // Corrección aquí: No debes asignar `useMutation` como un objeto
  const { mutate: createStudentMutation, isPending } = useMutation({
    mutationFn: SaveStudent,
    onSuccess: () => {
      // Se invalida la caché de la consulta para 'student' después de la mutación
      queryClient.invalidateQueries({ queryKey: ["student"] });
    },
  });

  return { createStudentMutation, isPending };
};