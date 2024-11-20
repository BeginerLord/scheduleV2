import { Alert, Box } from "@mui/material";
import ModalComponent from "../../../Components/ui/Modal";
import useCustomerForm from "../../../hooksCustomForms/useCustomerForm";
import BoardCourse from "../../Components/boardCourse";
import FormRegisterCourse from "../../Components/formRegisterCourse";
import { useSaveCourse } from "../../hooks";
import { CourseEnrollmentDto } from "../../model";
import style from "./coursess.module.css";
import { getErrorMessage } from "../../../utils/errorUtils";
import { useEffect, useState } from "react";

const CoursesGestion = () => {
  const { isPending, saveCourseMutation, isError, error, isSuccess } =
    useSaveCourse();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const createCourseSucces = async (data: CourseEnrollmentDto) => {
    await saveCourseMutation({
      ...data,
    });
  };
  const { register, handleSubmit, errors, reset } =
    useCustomerForm<CourseEnrollmentDto>(createCourseSucces);

  useEffect(() => {
    if (isSuccess) {
      setShowSuccessAlert(true);
      const timer = setTimeout(() => {
        setShowSuccessAlert(false);
      }, 20000); // 20 seconds
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      setShowErrorAlert(true);
      const timer = setTimeout(() => {
        setShowErrorAlert(false);
      }, 20000); // 20 seconds
      return () => clearTimeout(timer);
    }
  }, [isError]);

  return (
    <>
    <Box>
      {showErrorAlert && (
        <Alert severity="error">{getErrorMessage(error)}</Alert>
      )}
      {showSuccessAlert && (
        <Alert severity="success">Curso creado exitosamente!</Alert>
      )}

      <div className={style.container_modal_component}>
        <ModalComponent title={"Crear Curso"} onClick={handleSubmit}>
          <FormRegisterCourse registerCreate={register} errorsCreate={errors} />
        </ModalComponent>
      </div>
    </Box>
    <BoardCourse />
    </>
  );
};
export default CoursesGestion;
