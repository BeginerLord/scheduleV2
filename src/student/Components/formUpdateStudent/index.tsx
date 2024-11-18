import { UseFormRegister } from "react-hook-form";
 import InputComponent from "../../../Components/ui/Input";
import Error from "../../../Components/ui/Error";
import style from "./update.module.css";
import { UpdateStudentDto } from "../../models/Student ";

interface propsForms {
  registerUpdate: UseFormRegister<UpdateStudentDto>;
  errorsUpdate: Record<string, { message?: string }>;
}

const FormUpdateStudents = ({ registerUpdate, errorsUpdate }: propsForms) => {
  return (
    <>
      <div className={style.modal_edit}>
        <h1>Actualizar Estudiante</h1>
        <form>
          <div className={style.container_input_edit}>
            {/* Campo descripción */}
            <InputComponent
              id="description"
              label="Descripción"
              type="text"
              {...registerUpdate("description", {
                required: "campo obligatorio",
              })}
            />
            {errorsUpdate.description?.message && (
              <Error>{errorsUpdate.description.message}</Error>
            )}

            {/* Campo carrera */}
            <InputComponent
              id="carrer"
              label="Carrera"
              type="text"
              {...registerUpdate("carrer", {
                required: "campo obligatorio",
              })}
            />
            {errorsUpdate.carrer?.message && (
              <Error>{errorsUpdate.carrer.message}</Error>
            )}

            {/* Campo nombre de usuario */}
            <InputComponent
              id="username"
              label="Nombre de usuario"
              type="text"
              {...registerUpdate("username", {
                required: "campo obligatorio",
              })}
            />
            {errorsUpdate.username?.message && (
              <Error>{errorsUpdate.username.message}</Error>
            )}

            {/* Campo nombre completo */}
            <InputComponent
              id="fullName"
              label="Nombre completo"
              type="text"
              {...registerUpdate("fullName", {
                required: "campo obligatorio",
              })}
            />
            {errorsUpdate.fullName?.message && (
              <Error>{errorsUpdate.fullName.message}</Error>
            )}

            {/* Campo documento de identificación */}
            <InputComponent
              id="dni"
              label="Documento de identificación"
              type="text" // Usamos "text" por si el DNI tiene letras o símbolos
              {...registerUpdate("dni", {
                required: "campo obligatorio",
              })}
            />
            {errorsUpdate.dni?.message && (
              <Error>{errorsUpdate.dni.message}</Error>
            )}

            {/* Campo número de teléfono */}
            <InputComponent
              id="phoneNumber"
              label="Número de teléfono"
              type="text" // Usamos "text" para manejar posibles formatos de teléfono
              {...registerUpdate("phoneNumber", {
                required: "campo obligatorio",
              })}
            />
            {errorsUpdate.phoneNumber?.message && (
              <Error>{errorsUpdate.phoneNumber.message}</Error>
            )}

            {/* Campo dirección */}
            <InputComponent
              id="address"
              label="Dirección"
              type="text"
              {...registerUpdate("address", {
                required: "campo obligatorio",
              })}
            />
            {errorsUpdate.address?.message && (
              <Error>{errorsUpdate.address.message}</Error>
            )}

            {/* Campo correo electrónico */}
            <InputComponent
              id="email"
              label="Correo electrónico"
              type="email" // Usamos "email" para validación automática de correos
              {...registerUpdate("email", {
                required: "campo obligatorio",
              })}
            />
            {errorsUpdate.email?.message && (
              <Error>{errorsUpdate.email.message}</Error>
            )}

            {/* Campo contraseña */}
            <InputComponent
              id="password"
              label="Contraseña"
              type="password" // Campo de contraseña
              {...registerUpdate("password", {
                required: "campo obligatorio",
              })}
            />
            {errorsUpdate.password?.message && (
              <Error>{errorsUpdate.password.message}</Error>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default FormUpdateStudents;
