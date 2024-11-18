import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SaveCourse } from "../service";

export const useSaveCourse = () => {
    const queryClient = useQueryClient();
  
    // Corrección aquí: No debes asignar `useMutation` como un objeto
    const { mutate: saveCourseMutation, isPending } = useMutation({
      mutationFn: SaveCourse,
      onSuccess: () => {
        // Se invalida la caché de la consulta para 'student' después de la mutación
        queryClient.invalidateQueries({ queryKey: ["course"] });
      },
    });
  
    return { saveCourseMutation, isPending };
  };
  