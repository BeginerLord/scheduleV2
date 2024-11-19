import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  useDeleteCourse,
  useGetAllCourse,
  useUpdateCourseHook,
} from "../../hooks";
import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import useCustomerForm from "../../../hooksCustomForms/useCustomerForm";
import { UpdateCourseEnrollmentDto } from "../../model";
import MenuButtonComponent from "../../../Components/ui/buttonMenu";
import style from "./BoardCourse.module.css";
import FormUpdateCourse from "../FormUpdateCourse";

const BoardCourse = () => {
  const { isLoading, course } = useGetAllCourse(0, 10, "name", "asc");
  const { deleteCourseMutation: deleteCourse, isPending: isPendingDelete } =
    useDeleteCourse();
  const { updateCourseMutation, isPending } = useUpdateCourseHook();

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
      field: "name",
      headerName: "Nombre del Curso",
      width: 200,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "cantHrs",
      headerName: "Cantidad de Horas",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "level",
      headerName: "Nivel",
      width: 180,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "dniProffesor",
      headerName: "CC Docente",
      width: 200,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "idHorario",
      headerName: "ID Horario",
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
    course?.content?.map((item) => ({
      id: item.dniProffesor, // Usamos el DNI del profesor como ID único
      name: item.name,
      cantHrs: item.cantHrs,
      level: item.level,
      dniProffesor: item.dniProffesor,
      idHorario: item.idHorario,
    })) || [];

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
  );
};

export default BoardCourse;
