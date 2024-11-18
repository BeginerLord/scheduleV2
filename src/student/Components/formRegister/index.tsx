import { UseFormRegister, FieldValues } from "react-hook-form";
import InputComponent from "../../../Components/ui/Input";
import Error from "../../../Components/ui/Error";
import { StudentDto } from "../../models/Student ";
 
interface propsForms {
  registerCreate: UseFormRegister<StudentDto>;
  errorsCreate: Record<string, { message?: string }>;
}

const FormCreateStudent = ({ registerCreate, errorsCreate }: propsForms) => {
  return (
    <>
      {/* Campo para description */}
      <InputComponent
        id="description"
        label="Descripción"
        type="text"
        {...registerCreate("description", {
          required: "Este campo es obligatorio",
        })}
      />
      {errorsCreate.description && <Error>{errorsCreate.description.message}</Error>}

      {/* Campo para carrer */}
      <InputComponent
        id="carrer"
        label="Carrera"
        type="text"
        {...registerCreate("carrer", {
          required: "Este campo es obligatorio",
        })}
      />
      {errorsCreate.carrer && <Error>{errorsCreate.carrer.message}</Error>}

      {/* Campo para username */}
      <InputComponent
        id="username"
        label="Nombre de usuario"
        type="text"
        {...registerCreate("username", {
          required: "Este campo es obligatorio",
        })}
      />
      {errorsCreate.username && <Error>{errorsCreate.username.message}</Error>}

      {/* Campo para fullName */}
      <InputComponent
        id="fullName"
        label="Nombre completo"
        type="text"
        {...registerCreate("fullName", {
          required: "Este campo es obligatorio",
        })}
      />
      {errorsCreate.fullName && <Error>{errorsCreate.fullName.message}</Error>}

      {/* Campo para dni */}
      <InputComponent
        id="dni"
        label="Documento de identificación"
        type="text"
        {...registerCreate("dni", {
          required: "Este campo es obligatorio",
        })}
      />
      {errorsCreate.dni && <Error>{errorsCreate.dni.message}</Error>}

      {/* Campo para phoneNumber */}
      <InputComponent
        id="phoneNumber"
        label="Número de teléfono"
        type="text"
        {...registerCreate("phoneNumber", {
          required: "Este campo es obligatorio",
        })}
      />
      {errorsCreate.phoneNumber && <Error>{errorsCreate.phoneNumber.message}</Error>}

      {/* Campo para address */}
      <InputComponent
        id="address"
        label="Dirección"
        type="text"
        {...registerCreate("address", {
          required: "Este campo es obligatorio",
        })}
      />
      {errorsCreate.address && <Error>{errorsCreate.address.message}</Error>}

      {/* Campo para email */}
      <InputComponent
        id="email"
        label="Correo electrónico"
        type="email"
        {...registerCreate("email", {
          required: "Este campo es obligatorio",
          pattern: {
            value: /^[^@]+@[^@]+\.[^@]+$/,
            message: "Correo electrónico no válido",
          },
        })}
      />
      {errorsCreate.email && <Error>{errorsCreate.email.message}</Error>}

      {/* Campo para password */}
      <InputComponent
        id="password"
        label="Contraseña"
        type="password"
        {...registerCreate("password", {
          required: "Este campo es obligatorio",
        })}
      />
      {errorsCreate.password && <Error>{errorsCreate.password.message}</Error>}
    </>
  );
};

export default FormCreateStudent;
