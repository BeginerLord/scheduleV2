import { UseFormRegister } from "react-hook-form";
import InputComponent from "../../../Components/ui/Input";
import Error from "../../../Components/ui/Error";
 import { CourseEnrollmentDto } from "../../model";

   interface PropsForms {
    registerCreate: UseFormRegister<CourseEnrollmentDto>;
    errorsCreate: Record<string, { message?: string }>;
  }
  const FormRegisterCourse = ({ registerCreate, errorsCreate }: PropsForms) => {


  
    return (
      <>
        {/* Campo para name */}
        <InputComponent
          id="name"
          label="Nombre"
          type="text"
          {...registerCreate("name", {
            required: "Este campo es obligatorio",
          })}
        />
        {errorsCreate.name && <Error>{errorsCreate.name.message}</Error>}

        {/* Campo para cantHrs */}
        <InputComponent
          id="cantHrs"
          label="Cantidad de horas"
          type="number"
          {...registerCreate("cantHrs", {
            required: "Este campo es obligatorio",
            min: {
              value: 1,
              message: "La cantidad de horas debe ser mayor que 0",
            },
          })}
        />
        {errorsCreate.cantHrs && <Error>{errorsCreate.cantHrs.message}</Error>}

        {/* Campo para level */}
        <InputComponent
          id="level"
          label="Nivel"
          type="text"
          {...registerCreate("level", {
            required: "Este campo es obligatorio",
          })}
        />
        {errorsCreate.level && <Error>{errorsCreate.level.message}</Error>}

        {/* Campo para dniProffesor */}
        <InputComponent
          id="dniProffesor"
          label="Cédula del docente"
          type="text"
          {...registerCreate("dniProffesor", {
            required: "Este campo es obligatorio",
           
          })}
        />
        {errorsCreate.dniProffesor && (
          <Error>{errorsCreate.dniProffesor.message}</Error>
        )}

        {/* Campo para idHorario */}
        <InputComponent
          id="idHorario"
          label="ID Horario"
          type="number"
          {...registerCreate("idHorario", {
            required: "Este campo es obligatorio",
          })}
        />
        {errorsCreate.idHorario && (
          <Error>{errorsCreate.idHorario.message}</Error>
        )}
      </>
    );
  
};
export default FormRegisterCourse;
