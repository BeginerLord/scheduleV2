import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSchedule } from "../service/schedule";

export const useDeleteSchedule = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteDchedule, isPending } = useMutation({
    mutationFn: deleteSchedule,

    onSuccess: () => {
      // Invalida las consultas relacionadas con 'scheduleAll' después de la eliminación
      queryClient.invalidateQueries({ queryKey: ["scheduleAll"] });

      // Muestra una alerta de éxito
      alert("Horario eliminado con éxito.");
    },

    onError: () => {
      // Muestra una alerta de error si la eliminación falla
      alert("Error al eliminar el horario.");
    },
  });

  return { deleteDchedule, isPending };
};
