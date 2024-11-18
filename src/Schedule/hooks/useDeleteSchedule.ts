import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSchedule } from "../service/schedule";

export const useDeleteSchedule = () => {
    const queryClient = useQueryClient();
  
    const { mutate: deleteDchedule, isPending } = useMutation({
      mutationFn: deleteSchedule,
  
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["scheduleAll"] });
      },
    });
  
    return { deleteDchedule, isPending };
  };