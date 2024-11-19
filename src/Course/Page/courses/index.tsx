import ModalComponent from "../../../Components/ui/Modal";
import useCustomerForm from "../../../hooksCustomForms/useCustomerForm";
import FormRegisterCourse from "../../Components/formRegisterCourse";
 import { useSaveCourse } from "../../hooks";
import { Model1Dto } from "../../model/model1";
import style from "./coursess.module.css";

const CoursesGestion = () => {
  const { isPending, saveCourseMutation } = useSaveCourse();
  const createCourseSucces = async (data: Model1Dto) => {
    await saveCourseMutation({
      ...data,
    });
  };

  const { register, handleSubmit, errors, reset } =
    useCustomerForm<Model1Dto>(createCourseSucces);

  return (
    <>
      <div className={style.container_modal_component}>
        <ModalComponent title={"Crear Curso"} onClick={handleSubmit}>
          <FormRegisterCourse registerCreate={register} errorsCreate={errors} />
        </ModalComponent>
      </div>
      <></>
    </>
  );
};
export default CoursesGestion;
