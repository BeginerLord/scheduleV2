import { DefaultValues, FieldValues, SubmitHandler, useForm } from "react-hook-form";

const useCustomerForm = <T extends FieldValues>(onSubmit: SubmitHandler<T>,defaultValues?:DefaultValues<T>) => {
    const {
      register,
      reset,
      handleSubmit,
      formState: { errors },
    } = useForm<T>({defaultValues});
  
    const submitForm = (data: T) => {
      onSubmit(data);
      reset();
    };
  
    return {
      register,
      handleSubmit: handleSubmit(submitForm),
      errors,
      reset,
    };
  };
  
  export default useCustomerForm;