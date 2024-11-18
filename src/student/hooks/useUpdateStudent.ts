import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateStudentByDni } from "../services";
import { Student } from "../models/Student ";
 
export const useUpdateStudent = () => {
  const queryClient = useQueryClient();

  const { mutate: updateStudentMutation, isPending } = useMutation({
    mutationFn: ({ dni, student }: { dni: string; student: Student }) => UpdateStudentByDni(dni, student),

    onSuccess: () => {
      // Invalida la caché de la consulta para 'student' después de la mutación
      queryClient.invalidateQueries({ queryKey: ["student"] });

      // Muestra una alerta de éxito
      alert("Estudiante actualizado con éxito.");
    },

    onError: () => {
      // Muestra una alerta de error si la actualización falla
      alert("Error al actualizar el estudiante.");
    },
  });

  return { updateStudentMutation, isPending };
};
