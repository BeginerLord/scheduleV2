import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateCourseByName } from "../service";
import { CourseEnrollment } from "../model";



export const useUpdateCourseHook = () => {
    const queryClient = useQueryClient();
  
    const { mutate: updateCourseMutation, isPending } = useMutation({
      mutationFn: ({ name, course }: { name: string; course: CourseEnrollment }) =>
        UpdateCourseByName(name, course),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["course"] }); // Actualiza el cache
      },
    });
  
    return { updateCourseMutation, isPending };
  };
  