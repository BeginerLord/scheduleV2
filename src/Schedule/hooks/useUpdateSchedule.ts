import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateSchedule } from "../service/schedule";
import { Schedule } from "../model/schedule";

export const useUpdateSchedule = () => {
  const queryClient = useQueryClient();

  const { mutate: updateScheduleMutation, isPending,isError, error, isSuccess } = useMutation({
    mutationFn: ({ id, schedule }: { id: string; schedule: Schedule }) =>
      UpdateSchedule(id, schedule),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["scheduleAll"] });
    },
  });

  return { updateScheduleMutation, isPending,isError, error, isSuccess };
};
