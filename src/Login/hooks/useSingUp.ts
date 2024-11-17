import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AuthUser } from "../service/auth";

export const useSingup=()=>{
    const navigate = useNavigate();
    const{isPending, mutate: loginMutation}=useMutation({

        mutationFn:AuthUser,
        onSuccess:(data)=>{

            const { role } = data;
            switch (role) {
              case "ADMIN":
                navigate("/admin-dashboard");
                break;
              case "TEACHER":
                navigate("/teacher-dashboard");
                break;
              case "STUDENT":
                navigate("/student-dashboard");
                break;
              default:
                navigate("/login");
                break;
            }
        }
    });

    return{isPending, loginMutation}
}