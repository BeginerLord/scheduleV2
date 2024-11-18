import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateStudentByDni } from "../services";
 
export const useUpdateStudent = () => {
  const queryClient = useQueryClient();

  const { mutate: updateStudentMutation, isPending } = useMutation({
    mutationFn: UpdateStudentByDni,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["student"] });
    },
  });
  return { updateStudentMutation, isPending };
};