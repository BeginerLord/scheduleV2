import { useEffect, useState } from "react";
import ModalComponent from "../../Components/ui/Modal";
import useCustomerForm from "../../hooksCustomForms/useCustomerForm";
import BoardDocent from "../Components/boardDocent";
import FormCreateDocent from "../Components/formsRegister";
import { useCreateDocent } from "../hooks";
import { DocentDto } from "../model/docent";
import style from "./docent.module.css";
import { Alert } from "@mui/material";
import { getErrorMessage } from "../../utils/errorUtils";

export const Docent = () => {
  const {
    isPending,
    createDocentMutation: createDocent,
    isError,
    error,
    isSuccess,
  } = useCreateDocent();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const createDocentSucces = async (data: DocentDto) => {
    await createDocent({
      ...data,
    });
  };

  const { register, handleSubmit, errors, reset } =
    useCustomerForm<DocentDto>(createDocentSucces);

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
      {showErrorAlert && (
        <Alert severity="error">{getErrorMessage(error)}</Alert>
      )}
      {showSuccessAlert && (
        <Alert severity="success">Curso creado exitosamente!</Alert>
      )}
      <div className={style.container_modal_component}>
        <ModalComponent title={"Crear docente"} onClick={handleSubmit}>
          <FormCreateDocent registerCreate={register} errorsCreate={errors} />
        </ModalComponent>
      </div>

      <></>
      <BoardDocent />
    </>
  );
};
export default Docent;
