import ModalComponent from "../../Components/ui/Modal";
import useCustomerForm from "../../hooksCustomForms/useCustomerForm";
import BoardStudent from "../Components/boardStudent";
import FormCreateStudent from "../Components/formRegister";
import { useCreateStudent } from "../hooks/useCreateStudent";
import { StudentDto } from "../models/Student ";
import style from "./student.module.css";
const Student = () => {
  const { isPending, createStudentMutation: createStudentMutation } =
    useCreateStudent();
  const createStudentSucces = async (data: StudentDto) => {
    await createStudentMutation({
      ...data,
    });
    reset();
  };

  const { register, handleSubmit, errors, reset } =
    useCustomerForm<StudentDto>(createStudentSucces);

  return (
    <>
      <div className={style.container_modal_component}>
        <ModalComponent title={"Crear Estudiante"} onClick={handleSubmit}>
          <FormCreateStudent registerCreate={register} errorsCreate={errors} />
        </ModalComponent>
      </div>

      <div className={style.container_table}>
        <BoardStudent />
      </div>
    </>
  );
};

export default Student;
