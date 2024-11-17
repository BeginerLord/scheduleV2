import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateSchedule } from "../service/schedule";

export const useUpdateSchedule = () => {
    const queryClient = useQueryClient();
  
    const { mutate: updateScheduleMutation, isPending } = useMutation({
      mutationFn: UpdateSchedule,
  
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["scheduleStudent"] });
      },
    });
  
    return { updateScheduleMutation, isPending };
  };