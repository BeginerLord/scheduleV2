import React, { useState, useEffect } from "react";
import { useCreateStudentEnroll } from "../../hooks"; // Asegúrate de que la ruta sea correcta
import styles from "./StudentEnrollForm.module.css";
import { useNavigate } from "react-router-dom";

interface EnrollData {
  dni: string;
  idCurso: number;
}

const StudentEnrollForm = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    // Redirigir al listado de cursos
    navigate("/docent");
  };

  const [formData, setFormData] = useState<EnrollData>({
    dni: "",
    idCurso: 0,
  });

  const { createStudentMutation, isPending, error } = useCreateStudentEnroll();

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

  const handleSubmit = async (e: React.FormEvent) => {
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
    await createStudentMutation({ dni, idCurso });

    // Limpiar los campos del formulario después de un envío exitoso
    setFormData({
      dni: "",
      idCurso: 0,
    });
  };

  // Función para limpiar los campos manualmente
  const handleClear = () => {
    setFormData({
      dni: "",
      idCurso: 0,
    });
    setFormErrors({
      dni: "",
      idCurso: "",
    });
  };

  useEffect(() => {
    if (isPending) {
      return; // No mostrar nada mientras se está cargando
    }

    // Si ocurrió un error, mostrar la alerta de error
    if (error) {
      console.error("Error al inscribir al estudiante", error);
    }
  }, [isPending, error]);

  return (
    <div className="">
      <h1>Cursos</h1>
      <div className={styles.btn}>
        <button onClick={handleNavigate}>Ver listado de Cursos</button>
      </div>
      <div className={styles.containerh}>
        <form className={styles.form} onSubmit={handleSubmit}>
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
            {formErrors.idCurso && (
              <p style={{ color: "red" }}>{formErrors.idCurso}</p>
            )}
          </div>
          <button type="submit" disabled={isPending}>
            {isPending ? "Cargando..." : "Inscribir Estudiante"}
          </button>
          {/* Botón para limpiar los campos */}
        
        </form>
      </div>
    </div>
  );
};

export default StudentEnrollForm;
