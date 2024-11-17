import { useQuery } from "@tanstack/react-query";
import { GetScheduleById } from "../service/schedule";

export const useGetScheduleById = (id: number) => {
 
    const { isLoading, data: scheduleStudent } = useQuery({
        queryKey: ["scheduleStudent",id],
        queryFn: () => GetScheduleById(id),
      });
    
      return { isLoading, scheduleStudent };
  };