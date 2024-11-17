import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SaveDocent } from "../services";
 
export const useCreateDocent = () => {
  const queryClient = useQueryClient();

  const { mutate: createDocentMutation, isPending } = useMutation({
    mutationFn: SaveDocent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["docent"] });
    },
  });
  return { createDocentMutation, isPending };
};