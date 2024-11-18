import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateStudentByDni } from "../services";
import { Student } from "../models/Student ";
 
export const useUpdateStudent = () => {
  const queryClient = useQueryClient();

  const { mutate: updateStudentMutation, isPending } = useMutation({
    mutationFn: ({ dni, student }: { dni: string; student: Student }) => UpdateStudentByDni(dni, student),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["student"] });
    },
  });
  return { updateStudentMutation, isPending };
};