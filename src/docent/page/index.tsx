import ModalComponent from "../../Components/ui/Modal";
import useCustomerForm from "../../hooksCustomForms/useCustomerForm";
import BoardDocent from "../Components/boardDocent";
import FormCreateDocent from "../Components/formsRegister";
import { useCreateDocent } from "../hooks";
import { DocentDto } from "../model/docent";
import style from "./docent.module.css";

export const Docent = () => {
  const { isPending, createDocentMutation: createDocent } = useCreateDocent();
  const createDocentSucces = async (data: DocentDto) => {
    await createDocent({
      ...data,
    });
  };

  const { register, handleSubmit, errors, reset } =
    useCustomerForm<DocentDto>(createDocentSucces);

  return (
    <>
      <div className={style.container_modal_component}>
        <ModalComponent title={"Crear docente"} onClick={handleSubmit}>
          <FormCreateDocent registerCreate={register} errorsCreate={errors} />
        </ModalComponent>
      </div>
      <BoardDocent />
    </>
  );
};
export default Docent;
