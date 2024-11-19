import { UseFormRegister } from "react-hook-form";
import { UpdateCourseEnrollmentDto } from "../../model";
import InputComponent from "../../../Components/ui/Input";
import style from "./update.module.css";
import Error from "../../../Components/ui/Error";

interface propsForms {
  registerUpdate: UseFormRegister<UpdateCourseEnrollmentDto>;
  errorsUpdate: Record<string, { message?: string }>;
}

const FormUpdateCourse = ({ registerUpdate, errorsUpdate }: propsForms) => {
  return (
    <>
      <div className={style.modal_edit}>
        <h1>Actualizar Curso</h1>
        <form>
          <div className={style.container_input_edit}>
            <InputComponent
              id="name"
              label="nombre"
              type="text"
              {...registerUpdate("name", {
                required: "campo obligatorio",
              })}
            />
            {errorsUpdate.name?.message && (
              <Error>{errorsUpdate.name.message}</Error>
            )}
            <InputComponent
              id="cantHrs"
              label="cantidad de horas"
              type="number"
              {...registerUpdate("cantHrs", {
                required: "campo obligatorio",
              })}
            />
            {errorsUpdate.cantHrs?.message && (
              <Error>{errorsUpdate.cantHrs.message}</Error>
            )}
            <InputComponent
              id="level"
              label="editar nivel"
              type="text"
              {...registerUpdate("level", {
                required: "campo obligatorio",
              })}
            />
            {errorsUpdate.level?.message && (
              <Error>{errorsUpdate.level.message}</Error>
            )}
            <InputComponent
              id="dniProffesor"
              label="CC Docente"
              type="number"
              {...registerUpdate("dniProffesor", {
                required: "campo obligatorio",
              })}
            />
            {errorsUpdate.dniProffesor?.message && (
              <Error>{errorsUpdate.dniProffesor.message}</Error>
            )}
            <InputComponent
              id="idHorario"
              label="ID horario"
              type="number"
              {...registerUpdate("idHorario", {
                required: "campo obligatorio",
              })}
            />
            {errorsUpdate.idHorario?.message && (
              <Error>{errorsUpdate.idHorario.message}</Error>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default FormUpdateCourse;