import { UseFormRegister } from "react-hook-form";
import { DocentDto } from "../../model/docent";
import InputComponent from "../../../Components/ui/Input";
import Error from "../../../Components/ui/Error";

interface propsForms {
  registerCreate: UseFormRegister<DocentDto>;
  errorsCreate: Record<string, { message?: string }>;
}
const FormCreateDocent = ({ registerCreate, errorsCreate }: propsForms) => {
  return (
    <>
      <InputComponent
        id="profile"
        label="profile"
        type="text"
        {...registerCreate("profile", {
          required: "campo obligatorio",
        })}
      />{" "}
      {errorsCreate.profile?.message && (
        <Error>{errorsCreate.profile.message}</Error>
      )}
      <InputComponent
        id="username"
        label="username"
        type="text"
        {...registerCreate("username", {
          required: "campo obligatorio",
        })}
      />
      {errorsCreate.username?.message && (
        <Error>{errorsCreate.username.message}</Error>
      )}
      <InputComponent
        id="fullName"
        label="nombre completo"
        type="text"
        {...registerCreate("fullName", {
          required: "campo obligatorio",
        })}
      />
      {errorsCreate.fullName?.message && (
        <Error>{errorsCreate.fullName.message}</Error>
      )}
      <InputComponent
        id="dni"
        label="documento de identificacion"
        type="number"
        {...registerCreate("dni", {
          required: "campo obligatorio",
        })}
      />
      {errorsCreate.dni?.message && <Error>{errorsCreate.dni.message}</Error>}
      <InputComponent
        id="phoneNumber"
        label="phoneNumber"
        type="number"
        {...registerCreate("phoneNumber", {
          required: "campo obligatorio",
        })}
      />
      {errorsCreate.phoneNumber?.message && (
        <Error>{errorsCreate.phoneNumber.message}</Error>
      )}
      <InputComponent
        id="address"
        label="address"
        type="text"
        {...registerCreate("address", {
          required: "campo obligatorio",
        })}
      />
      {errorsCreate.address?.message && (
        <Error>{errorsCreate.address.message}</Error>
      )}
      <InputComponent
        id="email"
        label="email"
        type="text"
        {...registerCreate("email", {
          required: "campo obligatorio",
        })}
      />
      {errorsCreate.email?.message && (
        <Error>{errorsCreate.email.message}</Error>
      )}
      <InputComponent
        id="password"
        label="password"
        type="text"
        {...registerCreate("password", {
          required: "campo obligatorio",
        })}
      />
      {errorsCreate.password?.message && (
        <Error>{errorsCreate.password.message}</Error>
      )}
    </>
  );
};

export default FormCreateDocent;
