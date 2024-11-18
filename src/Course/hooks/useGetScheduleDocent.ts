import { useQuery } from "@tanstack/react-query"
import { GetScheduleDocent } from "../../Schedule/service/schedule"


export const useGetScheduleDocent=()=>{
    const{isLoading, data: scheduleDocent}=useQuery({

        queryKey:["scheduleDocent"],
        queryFn:()=> GetScheduleDocent(),
    })

    return{isLoading,scheduleDocent}
}