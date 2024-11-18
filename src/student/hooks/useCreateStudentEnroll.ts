import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SaveStudentEnroll } from "../services";

export const useCreateStudentEnroll = () => {
  const queryClient = useQueryClient();

  // Mutación para crear una matrícula de estudiante
  const {
    mutate: createStudentMutation,
    isPending,
    error,
  } = useMutation({
    mutationFn: SaveStudentEnroll,

    // Manejo de éxito
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["studentEnroll"] });

      // Mostrar alerta de éxito con detalles claros
      alert(
        "🎉 ¡La matrícula del estudiante fue exitosa! Ahora el estudiante está matriculado en el curso."
      );
    },

    // Manejo de errores
    onError: (error: any) => {
      // Obtener el mensaje de error del backend, si está disponible
      const errorMessage =
        error?.response?.data?.message ||
        "Ocurrió un error inesperado al intentar realizar la matrícula.";

      // Mostrar alerta de error con detalles claros
      alert(
        `🚨 Error: ${errorMessage}. Verifique los datos o intente más tarde.`
      );
    },
  });

  return { createStudentMutation, isPending, error };
};
