import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  useDeleteCourse,
  useGetAllCourse,
  useUpdateCourseHook,
} from "../../hooks";
import { Alert, Box, CircularProgress, Paper, Typography } from "@mui/material";
import useCustomerForm from "../../../hooksCustomForms/useCustomerForm";
import { UpdateCourseEnrollmentDto } from "../../model";
import MenuButtonComponent from "../../../Components/ui/buttonMenu";
import style from "./BoardCourse.module.css";
import FormUpdateCourse from "../FormUpdateCourse";
import { getErrorMessage } from "../../../utils/errorUtils";
import { useEffect, useState } from "react";

const BoardCourse = () => {
  const { isLoading, course } = useGetAllCourse(0, 10, "name", "asc");
  const {
    deleteCourseMutation: deleteCourse,
    isPending: isPendingDelete,
    isError: isDeleteError,
    error: deleteError,
    isSuccess: isDeleteSuccess,
  } = useDeleteCourse();
  const {
    updateCourseMutation,
    isPending,
    isError: isUpdateError,
    error: updateError,
    isSuccess: isUpdateSuccess,
  } = useUpdateCourseHook();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleDeactivate = async (name: string) => {
    await deleteCourse(name);
  };

  const updateCourseSuccess = async (data: UpdateCourseEnrollmentDto) => {
    await updateCourseMutation({
      name: data.name || "",
      course: {
        name: data.name || "",
        cantHrs: data.cantHrs || "",
        level: data.level || "",
        dniProffesor: data.dniProffesor || "",
        idHorario: data.idHorario || "",
      },
    });
  };

  const {
    register: registerUpdate,
    handleSubmit: handleSubmitUpdate,
    errors: errorsUpdate,
  } = useCustomerForm<UpdateCourseEnrollmentDto>(updateCourseSuccess);

  // Definir columnas del DataGrid
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "Id Curso",
      width: 100,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "name",
      headerName: "Nombre",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "cantHrs",
      headerName: "Cantidad de horas",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "level",
      headerName: "Nivel",
      width: 170,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "docenteCedula",
      headerName: "Docente CC",
      width: 150,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "codigoHorario",
      headerName: "Horario code",
      width: 150,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "fullName",
      headerName: "Nombre completo",
      width: 150,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "correo",
      headerName: "correo electronico",
      width: 150,
      headerAlign: "left",
      align: "left",
    },

    {
      field: "actions",
      headerName: "Acciones",
      width: 150,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <MenuButtonComponent
            onEdit={() => handleSubmitUpdate(params.row)}
            onDeactivate={() => handleDeactivate(params.row.name)}
            isPendingDeactivate={isPendingDelete}
            isPendingEdit={isPending}
            title={`¿Desactivar curso ${params.row.name}?`}
            label={`Se desactivará permanentemente el curso ${params.row.name}.`}
          >
            <FormUpdateCourse
              errorsUpdate={errorsUpdate}
              registerUpdate={registerUpdate}
            />
          </MenuButtonComponent>
        </Box>
      ),
    },
  ];

  // Crear filas para el DataGrid
  const rows =
    course?.content?.map((course) => ({
      id: course.id, // Usamos el DNI como identificador único de cada fila
      name: course.name || "",
      cantHrs: course.cantHrs || "",
      level: course.level || "",
      docenteCedula: course.docenteCedula || "",
      codigoHorario: course.codigoHorario || "",
      fullName: course.fullName || "",
      correo: course.correo || "",
    })) || [];
    useEffect(() => {
      if (isDeleteSuccess || isUpdateSuccess) {
        setShowSuccessAlert(true);
        const timer = setTimeout(() => {
          setShowSuccessAlert(false);
        }, 20000); // 20 seconds
        return () => clearTimeout(timer);
      }
    }, [isDeleteSuccess, isUpdateSuccess]);
  
    useEffect(() => {
      if (isDeleteError || isUpdateError) {
        setShowErrorAlert(true);
        const timer = setTimeout(() => {
          setShowErrorAlert(false);
        }, 20000); // 20 seconds
        return () => clearTimeout(timer);
      }
    }, [isDeleteError, isUpdateError]);
  

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
     {showErrorAlert && (
          <Alert severity="error">{getErrorMessage(deleteError || updateError)}</Alert>
        )}
        {showSuccessAlert && (
          <Alert severity="success">Operación realizada exitosamente!</Alert>
        )}
    <div className={style.container}>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Historial de Cursos
        </Typography>
        <Paper sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            autoPageSize
            getRowSpacing={(params) => ({
              top: params.isFirstVisible ? 10 : 5,
              bottom: params.isLastVisible ? 10 : 5,
            })}
            sx={{
              "& .MuiDataGrid-cell": {
                fontSize: "1rem",
                padding: "8px 12px",
              },
              "& .MuiDataGrid-columnHeaders": {
                fontSize: "1.1rem",
                fontWeight: "bold",
                backgroundColor: "#f5f5f5",
                textAlign: "center",
                textTransform: "uppercase",
              },
            }}
          />
        </Paper>
      </Box>
    </div>
    </Box>
  );
};

export default BoardCourse;
