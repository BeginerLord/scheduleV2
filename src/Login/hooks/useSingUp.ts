import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../service/auth";
 
export const useSingup = () => {
  const navigate = useNavigate();

  const { mutate: loginMutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const { authorities } = data;
      const path =
      authorities === "ROLE_ADMIN"
          ? "/home"
          : authorities === "ROLE_STUDENT"
          ? "/horario-estudiante"
          : authorities === "ROLE_TEACHER"
          ? "/horario-docente"
          : "/";

      navigate(path);
    },
  });

  return { useSingup: loginMutate, isPending };
};
