import { UseFormRegister } from "react-hook-form";
 import InputComponent from "../../../Components/ui/Input";
import Error from "../../../Components/ui/Error";
import style from "./update.module.css"

import { UpdateScheduleDto } from "../../../Schedule/model/schedule";

interface PropsForms {
  registerUpdate: UseFormRegister<UpdateScheduleDto>;
  errorsUpdate: Record<string, { message?: string }>;
}

const FormUpdateSchedule = ({ registerUpdate, errorsUpdate }: PropsForms) => {
  return (
    <>
    <div className={style.modal_edit}>
      <h1>Actualizar Horario</h1>
      <form>


        
        <div className={style.container_input_edit}>

        <InputComponent
            id="id"
            label="id"
            type="number"
            {...registerUpdate("id", {
              required: "El id es obligatorio",
            })}
          />
          {errorsUpdate.startTime && (
            <Error>{errorsUpdate.startTime.message}</Error>
          )}

          <InputComponent
            id="startTime"
            label="Fecha de Inicio"
            type="datetime-local"
            {...registerUpdate("startTime", {
              required: "La fecha de inicio es obligatoria",
            })}
          />
          {errorsUpdate.startTime && (
            <Error>{errorsUpdate.startTime.message}</Error>
          )}

          {/* Campo para la fecha de finalización */}
          <InputComponent
            id="endTime"
            label="Fecha de Finalización"
            type="datetime-local"
            {...registerUpdate("endTime", {
              required: "La fecha de finalización es obligatoria",
            })}
          />
          {errorsUpdate.endTime && (
            <Error>{errorsUpdate.endTime.message}</Error>
          )}

          {/* Campo para el salón */}
          <InputComponent
            id="room"
            label="Salón"
            type="text"
            {...registerUpdate("room", {
              required: "El salón es obligatorio",
            })}
          />
          {errorsUpdate.room && <Error>{errorsUpdate.room.message}</Error>}

          {/* Campo para el día */}
          <InputComponent
            id="day"
            label="Día"
            type="week"
            {...registerUpdate("day", {
              required: "El día es obligatorio",
            })}
            />
            </div>
          </form>
        </div>
      </>
  );
};

export default FormUpdateSchedule;
