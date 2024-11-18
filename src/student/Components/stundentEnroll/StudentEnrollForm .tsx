 import React, { useState } from "react";
import { useCreateStudentEnroll } from "../../hooks"; // Asegúrate de que la ruta sea correcta
import styles from "./StudentEnrollForm.module.css";
interface EnrollData {
  dni: string;
  idCurso: number; // Asegúrate de que este tipo sea siempre número
}

const StudentEnrollForm = () => {
  const [formData, setFormData] = useState<EnrollData>({
    dni: "",
    idCurso: 0, // Inicializa con un valor numérico
  });

  const { createStudentMutation, isPending, error } = useCreateStudentEnroll(); // Asumiendo que tu hook tiene un `error` en caso de fallo

  const [formErrors, setFormErrors] = useState<{ dni?: string; idCurso?: string }>({
    dni: "",
    idCurso: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Convierte idCurso a número si es necesario
    setFormData((prev) => ({
      ...prev,
      [name]: name === "idCurso" ? Number(value) : value, // Convierte solo idCurso a número
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { dni, idCurso } = formData;

    let valid = true;
    const errors: { dni?: string; idCurso?: string } = {};

    // Validación de los campos
    if (!dni) {
      errors.dni = "El DNI es obligatorio.";
      valid = false;
    }

    if (!idCurso) {
      errors.idCurso = "El ID del curso es obligatorio.";
      valid = false;
    }

    setFormErrors(errors);

    if (!valid) {
      return; // Si hay errores, no enviar el formulario
    }

    // Llamada a la mutación para crear la inscripción
    createStudentMutation({ dni, idCurso });
  };

  return (
    <div className={styles.containerh}>
   
      <form  className={styles.form}onSubmit={handleSubmit}>
      <h2>Inscripción de Estudiante de curso</h2>
        <div className={styles.inp}>
          <label htmlFor="dni">DNI del estudiante:</label>
          <input
            type="text"
            id="dni"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            required
          />
          {formErrors.dni && <p style={{ color: "red" }}>{formErrors.dni}</p>}
        </div>

        <div className={styles.inp}>
          <label htmlFor="idCurso">ID del Curso:</label>
          <input
            type="number"
            id="idCurso"
            name="idCurso"
            min={1}
            
            value={formData.idCurso}
            onChange={handleChange}
            required
          />
          {formErrors.idCurso && <p style={{ color: "red" }}>{formErrors.idCurso}</p>}
        </div>

        <button type="submit" disabled={isPending}>
          {isPending ? "Cargando..." : "Inscribir Estudiante"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>} {/* Mostrar el error en caso de fallo */}
      </form>
    </div>
  );
};

export default StudentEnrollForm;
