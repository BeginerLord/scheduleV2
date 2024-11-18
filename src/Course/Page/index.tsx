import ModalComponent from "../../Components/ui/Modal";
import useCustomerForm from "../../hooksCustomForms/useCustomerForm";
import FormCreateCourse from "../Components/FormRegister";
import { useSaveCourse } from "../hooks";
import { CourseEnrollmentDto } from "../model";
import style from "./course.module.css"

export const Course = () => {

    const{ saveCourseMutation:crear, isPending}=useSaveCourse();
  const createScheduleSucces = async (data: CourseEnrollmentDto) => {
    await crear({
      ...data,
    });
  };

  const { register, handleSubmit, errors, reset } =
    useCustomerForm<CourseEnrollmentDto>(createScheduleSucces);

  return (
    <>
    

      <div className={style.container_modal_component}>
      <ModalComponent title={"Crear Cursos"} onClick={handleSubmit}>
          <FormCreateCourse
            registerCreate={register}
            errorsCreate={errors}
          />
        </ModalComponent>
   

      </div>
    </>
  );
}
  export default Course;
