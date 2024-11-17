import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateSchedule } from "../service/schedule";

export const useCreateSchedule = () => {
    const queryClient = useQueryClient();
  
    const { mutate: createSchedule, isPending } = useMutation({
      mutationFn: CreateSchedule,
  
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["schedules"] });
      },
    });
  
    return { createSchedule, isPending };
  };