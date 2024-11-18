import { UseFormRegister } from "react-hook-form";
import { UpdateStudentDto } from "../../models/Student ";
import InputComponent from "../../../Components/ui/Input";
import Error from "../../../Components/ui/Error";
import style from "./update.module.css"

interface propsForms {
    registerUpdate: UseFormRegister<UpdateStudentDto>;
    errorsUpdate: Record<string, { message?: string }>;
  }
  
  const FormUpdateStudent = ({ registerUpdate, errorsUpdate }: propsForms) => {
    return (
      <>
        <div className={style.modal_edit}>
          <h1>Actualizar Estado</h1>
          <form>
            <div className={style.container_input_edit}>
            <InputComponent
        id="description"
        label="Descripción"
        type="text"
        {...registerUpdate("description", {
          required: "Este campo es obligatorio",
        })}
      />
     

      {/* Campo para carrer */}
      <InputComponent
        id="carrer"
        label="Carrera"
        type="text"
        {...registerUpdate("carrer", {
          required: "Este campo es obligatorio",
        })}
      />
      {errorsUpdate.carrer && <Error>{errorsUpdate.carrer.message}</Error>}

      {/* Campo para username */}
      <InputComponent
        id="username"
        label="Nombre de usuario"
        type="text"
        {...registerUpdate("username", {
          required: "Este campo es obligatorio",
        })}
      />
      {errorsUpdate.username && <Error>{errorsUpdate.username.message}</Error>}

      {/* Campo para fullName */}
      <InputComponent
        id="fullName"
        label="Nombre completo"
        type="text"
        {...registerUpdate("fullName", {
          required: "Este campo es obligatorio",
        })}
      />
      {errorsUpdate.fullName && <Error>{errorsUpdate.fullName.message}</Error>}

      {/* Campo para dni */}
      <InputComponent
        id="dni"
        label="Documento de identificación"
        type="text"
        {...registerUpdate("dni", {
          required: "Este campo es obligatorio",
        })}
      />
      {errorsUpdate.dni && <Error>{errorsUpdate.dni.message}</Error>}

      {/* Campo para phoneNumber */}
      <InputComponent
        id="phoneNumber"
        label="Número de teléfono"
        type="text"
        {...registerUpdate("phoneNumber", {
          required: "Este campo es obligatorio",
        })}
      />
      {errorsUpdate.phoneNumber && <Error>{errorsUpdate.phoneNumber.message}</Error>}

      {/* Campo para address */}
      <InputComponent
        id="address"
        label="Dirección"
        type="text"
        {...registerUpdate("address", {
          required: "Este campo es obligatorio",
        })}
      />
      {errorsUpdate.address && <Error>{errorsUpdate.address.message}</Error>}

      {/* Campo para email */}
      <InputComponent
        id="email"
        label="Correo electrónico"
        type="email"
        {...registerUpdate("email", {
          required: "Este campo es obligatorio",
          pattern: {
            value: /^[^@]+@[^@]+\.[^@]+$/,
            message: "Correo electrónico no válido",
          },
        })}
      />
      {errorsUpdate.email && <Error>{errorsUpdate.email.message}</Error>}

      {/* Campo para password */}
      <InputComponent
        id="password"
        label="Contraseña"
        type="password"
        {...registerUpdate("password", {
          required: "Este campo es obligatorio",
        })}
      />
            </div>
          </form>
        </div>
      </>
    );
  };
  
  export default FormUpdateStudent;
  