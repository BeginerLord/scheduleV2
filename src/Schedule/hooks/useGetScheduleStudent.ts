import { useQuery } from "@tanstack/react-query"
import { GetScheduleStudent } from "../service/schedule"

export const useGetScheduleStudent =()=>{

    const {data:scheduleStudent, isLoading}= useQuery({

        queryKey:["scheduleStudents"],
        queryFn: GetScheduleStudent,
    })

    return{scheduleStudent, isLoading}
}