import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SaveStudentEnroll } from "../services";
 

export const useCreateStudentEnroll = () => {
  const queryClient = useQueryClient();

  const { mutate: createStudentMutation, isPending } = useMutation({
    mutationFn: SaveStudentEnroll,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["studentEnroll"] });
    },
  });

  return { createStudentMutation, isPending };
};