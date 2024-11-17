import React, { forwardRef } from "react";
import styles from "./input.module.css"


interface Props {
    id?: string;
    label?: string;
    type?: string;
    options?: string[];
  }
  
  const InputComponent = forwardRef<HTMLInputElement | HTMLSelectElement, Props>(
    ({ label, type, id, options, ...rest }, ref) => {
      return (
        <div className={styles.Input}>
          <span>{label}</span>
  
          {type === "enum" && options ? (
            <select
              id={id}
              ref={ref as React.Ref<HTMLSelectElement>} // Usamos el ref correctamente para el select
              className={styles.select}
              {...rest} // Descomponemos las props restantes (register)
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={id}
              type={type}
              ref={ref as React.Ref<HTMLInputElement>} // Usamos el ref correctamente para el input
              {...rest} // Descomponemos las props restantes (register)
            />
          )}
        </div>
      );
    }
  );
  
  export default InputComponent;