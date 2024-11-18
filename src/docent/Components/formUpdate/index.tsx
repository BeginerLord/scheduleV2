import { UseFormRegister } from "react-hook-form";
import { DocentDto } from "../../model/docent";
import InputComponent from "../../../Components/ui/Input";
import Error from "../../../Components/ui/Error";

interface propsForms {
  registerUpdate: UseFormRegister<DocentDto>;
  errorsUpdate: Record<string, { message?: string }>;
}

const FormUpdateDocent = ({ registerUpdate, errorsUpdate }: propsForms) => {
  return (
    <>
      <InputComponent
        id="profile"
        label="profile"
        type="text"
        {...registerUpdate("profile", {
          required: "campo obligatorio",
        })}
      />{" "}
      {errorsUpdate.profile?.message && (
        <Error>{errorsUpdate.profile.message}</Error>
      )}
      <InputComponent
        id="username"
        label="username"
        type="text"
        {...registerUpdate("username", {
          required: "campo obligatorio",
        })}
      />
      {errorsUpdate.username?.message && (
        <Error>{errorsUpdate.username.message}</Error>
      )}
      <InputComponent
        id="fullName"
        label="nombre completo"
        type="text"
        {...registerUpdate("fullName", {
          required: "campo obligatorio",
        })}
      />
      {errorsUpdate.fullName?.message && (
        <Error>{errorsUpdate.fullName.message}</Error>
      )}
      <InputComponent
        id="dni"
        label="documento de identificacion"
        type="number"
        {...registerUpdate("dni", {
          required: "campo obligatorio",
        })}
      />
      {errorsUpdate.dni?.message && <Error>{errorsUpdate.dni.message}</Error>}
      <InputComponent
        id="phoneNumber"
        label="phoneNumber"
        type="number"
        {...registerUpdate("phoneNumber", {
          required: "campo obligatorio",
        })}
      />
      {errorsUpdate.phoneNumber?.message && (
        <Error>{errorsUpdate.phoneNumber.message}</Error>
      )}
      <InputComponent
        id="address"
        label="address"
        type="text"
        {...registerUpdate("address", {
          required: "campo obligatorio",
        })}
      />
      {errorsUpdate.address?.message && (
        <Error>{errorsUpdate.address.message}</Error>
      )}
      <InputComponent
        id="email"
        label="email"
        type="text"
        {...registerUpdate("email", {
          required: "campo obligatorio",
        })}
      />
      {errorsUpdate.email?.message && (
        <Error>{errorsUpdate.email.message}</Error>
      )}
      <InputComponent
        id="password"
        label="password"
        type="text"
        {...registerUpdate("password", {
          required: "campo obligatorio",
        })}
      />
      {errorsUpdate.password?.message && (
        <Error>{errorsUpdate.password.message}</Error>
      )}
    </>
  );
};

export default FormUpdateDocent;
