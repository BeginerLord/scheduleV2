import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateSchedule } from "../service/schedule";

export const useCreateSchedule = () => {
  const queryClient = useQueryClient();

  const { mutate: createSchedule, isPending } = useMutation({
    mutationFn: CreateSchedule,

    onSuccess: () => {
      // Invalida la caché de la consulta para 'schedules' después de la mutación
      queryClient.invalidateQueries({ queryKey: ["scheduleAll"] });

      // Muestra una alerta de éxito
      alert("Horario creado con éxito.");
    },

    onError: () => {
      // Muestra una alerta de error si la creación falla
      alert("Error al crear el horario.");
    },
  });

  return { createSchedule, isPending };
};
