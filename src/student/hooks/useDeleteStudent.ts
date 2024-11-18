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
    },
  });

  return { deleteStudentMutation, isPending };
};