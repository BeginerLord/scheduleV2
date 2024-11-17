import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteDocent } from "../services";
 

export const useDeleteDocent = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteDocentMutate, isPending } = useMutation({
    mutationFn: DeleteDocent,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["docent"] });
    },
  });

  return { deleteDocentMutate, isPending };
};