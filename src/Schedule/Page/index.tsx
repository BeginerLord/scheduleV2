import ModalComponent from "../../Components/ui/Modal";
import useCustomerForm from "../../hooksCustomForms/useCustomerForm";
import ScheduleList from "../Components/BoardSchedulle";
 import FormCreateSchedule from "../Components/formsRegister";
import { useCreateSchedule } from "../hooks";
import { ScheduleDto } from "../model/schedule";
import style from "./schedule.module.css"



export const Schedule = () => {

    const{createSchedule:crear, isPending }=useCreateSchedule();
  const createScheduleSucces = async (data: ScheduleDto) => {
    await crear({
      ...data,
    });
    reset();

  };

  const { register, handleSubmit, errors, reset } =
    useCustomerForm<ScheduleDto>(createScheduleSucces);

  return (
    <>
    

      <div className={style.container_modal_component}>
      <ModalComponent title={"Crear horario"} onClick={handleSubmit}>
          <FormCreateSchedule
            registerCreate={register}
            errorsCreate={errors}
            resetForm={reset}
          />
        </ModalComponent>
 

      </div>
      <ScheduleList/>
    </>
  );
}
  export default Schedule;
