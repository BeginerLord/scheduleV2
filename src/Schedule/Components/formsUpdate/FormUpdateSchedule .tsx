import { UseFormRegister } from "react-hook-form";
import InputComponent from "../../../Components/ui/Input";
import { ScheduleDto } from "../../model/schedule";
import Error from "../../../Components/ui/Error";
import style from "./forms.module.css";

interface PropsForms {
  registerUpdate: UseFormRegister<ScheduleDto>;
  errorsUpdate: Record<string, { message?: string }>;
}

const FormUpdateSchedules = ({ registerUpdate, errorsUpdate }: PropsForms) => {
  return (
    <div className={style.modal_edit}>
      <h1>Actualizar horario</h1>
      <form>
        <InputComponent
          id="id"
          label="ID"
          type="number"
          {...registerUpdate("id", {
            required: "Campo obligatorio",
          })}
        />
        {errorsUpdate["id"]?.message && <Error>{errorsUpdate["id"].message}</Error>}

        <InputComponent
          id="startTime"
          label="Fecha de inicio"
          type="datetime-local"
          {...registerUpdate("startTime", {
            required: "Campo obligatorio",
          })}
        />
        {errorsUpdate["startTime"]?.message && <Error>{errorsUpdate["startTime"].message}</Error>}

        <InputComponent
          id="endTime"
          label="Fecha de finalización"
          type="datetime-local"
          {...registerUpdate("endTime", {
            required: "Campo obligatorio",
          })}
        />
        {errorsUpdate["endTime"]?.message && <Error>{errorsUpdate["endTime"].message}</Error>}

        <InputComponent
          id="room"
          label="Salón"
          type="text"
          {...registerUpdate("room", {
            required: "Campo obligatorio",
          })}
        />
        {errorsUpdate["room"]?.message && <Error>{errorsUpdate["room"].message}</Error>}

        <InputComponent
          id="day"
          label="Día"
          type="week"
          {...registerUpdate("day", {
            required: "Campo obligatorio",
          })}
        />
        {errorsUpdate["day"]?.message && <Error>{errorsUpdate["day"].message}</Error>}
      </form>
    </div>
  );
};

export default FormUpdateSchedules;
