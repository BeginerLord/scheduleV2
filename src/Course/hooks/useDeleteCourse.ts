import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteCourse } from "../service";

export const useDeleteCourse = () => {
    const queryClient = useQueryClient();
  
    // Hook que utiliza useMutation para realizar la mutación de eliminación
    const { mutate: deleteCourseMutation, isPending, isError, error,isSuccess } = useMutation({
      mutationFn: DeleteCourse,
      onSuccess: () => {
        // Invalida las consultas relacionadas con 'student' después de la eliminación
        queryClient.invalidateQueries({ queryKey: ["course"] });
      },
    });
  
    return { deleteCourseMutation, isPending,isError, error,isSuccess };
  };