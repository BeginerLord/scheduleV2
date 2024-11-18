import { UseFormRegister } from "react-hook-form";
import Error from "../../../Components/ui/Error";
import InputComponent from "../../../Components/ui/Input";
import { CourseEnrollmentDto } from "../../model";

interface propsForms {
    registerCreate: UseFormRegister<CourseEnrollmentDto>;
    errorsCreate: Record<string, { message?: string }>;
  }
  const FormCreateCourse = ({ registerCreate, errorsCreate }: propsForms) => {
    return (
      <>
        <InputComponent
          id="name"
          label="nombre"
          type="text"
          {...registerCreate("name", {
            required: "campo obligatorio",
          })}
        />{" "}
        {errorsCreate.name?.message && (
          <Error>{errorsCreate.name.message}</Error>
        )}
         <InputComponent
          id="cantHrs"
          label="cantidad de horas"
          type="number"
          {...registerCreate("cantHrs", {
            required: "campo obligatorio",
          })}
        />{" "}
        {errorsCreate.cantHrs?.message && (
          <Error>{errorsCreate.cantHrs.message}</Error>
        )}
         <InputComponent
          id="level"
          label="nivel que se requiere"
          type="text"
          {...registerCreate("level", {
            required: "campo obligatorio",
          })}
        />{" "}
        {errorsCreate.level?.message && (
          <Error>{errorsCreate.level.message}</Error>
        )}
         <InputComponent
          id="dniProffesor"
          label="CC del docente"
          type="text"
          {...registerCreate("dniProffesor", {
            required: "campo obligatorio",
          })}
        />{" "}
        {errorsCreate.dniProffesor?.message && (
          <Error>{errorsCreate.dniProffesor.message}</Error>
        )}
        <InputComponent
          id="idHorario"
          label="identificador del horario"
          type="number"
          {...registerCreate("idHorario", {
            required: "campo obligatorio",
          })}
        />{" "}
        {errorsCreate.idHorario?.message && (
          <Error>{errorsCreate.idHorario.message}</Error>
        )}
      </>
    );
  };
  
  export default FormCreateCourse;
  