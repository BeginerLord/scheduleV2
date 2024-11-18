import { useQuery } from "@tanstack/react-query";
import { PaginatedResponse } from "../../model/PaginatedResponse";
import { ScheduleDto } from "../model/schedule";
import { GetAllSchedule } from "../service/schedule";

export const useGetAllSchedule = (
    page = 0,
    size = 10,
    sortBy = "startTime",
    direction = "asc"
  ) => {
    const { isLoading, data: scheduleAll } = useQuery<PaginatedResponse<ScheduleDto>>({
      queryKey: ["scheduleAll", page, size, sortBy, direction],
      queryFn: () => GetAllSchedule(page, size, sortBy, direction),
      staleTime: 5000, // keep previous data for 5 seconds
    });
  
    return { isLoading, scheduleAll };
  };