import { useQuery } from "@tanstack/react-query"
import { GetScheduleDocent } from "../../Schedule/service/schedule"


export const useGetScheduleDocent=()=>{
    const{isLoading, data: scheduleDocent}=useQuery({

        queryKey:["scheduleDocent"],
        queryFn:GetScheduleDocent,
        refetchInterval: 2000, // Actualiza cada 5 segundos

        retry: false, // Evita múltiples intentos en caso de errores
    })

    return{isLoading,scheduleDocent}
}
