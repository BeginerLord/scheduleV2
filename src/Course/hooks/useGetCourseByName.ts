import { useQuery } from "@tanstack/react-query";
import { SearcCourseByName } from "../service";

export const useSearchByName = (name: string) => {
 
    const { isLoading, data: searcCourseByName } = useQuery({
        queryKey: ["course",name],
        queryFn: () => SearcCourseByName(name),
      });
    
      return { isLoading,  searcCourseByName};
  };