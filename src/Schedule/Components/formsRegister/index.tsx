import { UseFormRegister } from "react-hook-form";
import InputComponent from "../../../Components/ui/Input";
import { ScheduleDto } from "../../model/schedule";
import Error from "../../../Components/ui/Error";

interface propsForms {
  registerCreate: UseFormRegister<ScheduleDto>;
  errorsCreate: Record<string, { message?: string }>;
}
const FormCreateSchedule = ({ registerCreate, errorsCreate }: propsForms) => {
  return (
    <>
      <InputComponent
        id="startTime"
        label="fecha de inicio"
        type="date"
        {...registerCreate("startTime", {
          required: "campo obligatorio",
        })}
      />
      {errorsCreate.startTime?.message && (
        <Error>{errorsCreate.startTime.message}</Error>
      )}
      <InputComponent
        id="endTime"
        label="fecha de finalizacion"
        type="date"
        {...registerCreate("startTime", {
          required: "campo obligatorio",
        })}
      />{" "}
      {errorsCreate.endTime?.message && (
        <Error>{errorsCreate.endTime.message}</Error>
      )}
      <InputComponent
        id="room"
        label="salon"
        type="text"
        {...registerCreate("room", {
          required: "campo obligatorio",
        })}
      />{" "}
      {errorsCreate.room?.message && (
        <Error>{errorsCreate.room.message}</Error>
      )}
      <InputComponent
        id="day"
        label="dia"
        type="week"
        {...registerCreate("day", {
          required: "campo obligatorio",
        })}
      />{" "}
      {errorsCreate.day?.message && (
        <Error>{errorsCreate.day.message}</Error>
      )}
    </>
  );
};

export default FormCreateSchedule;