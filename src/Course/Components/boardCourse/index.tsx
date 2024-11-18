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
import FormUpdateCourse from "../FormsUpdate";

import style from "./BoardCourse.module.css";
const BoardStudent = () => {
  const { isLoading, course } = useGetAllCourse(
    0,
    10,
    "userEntity.username",
    "asc"
  );
  const { deleteCourseMutation: deleteCourse, isPending: isPendingDelete } =
    useDeleteCourse();
  const { updateCourseMutation, isPending } = useUpdateCourseHook();

  const handleDeactivate = async (name: string) => {
    await deleteCourse(name);
  };

  const updateCourseSucces = async (data: UpdateCourseEnrollmentDto) => {
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
    reset,
  } = useCustomerForm<UpdateCourseEnrollmentDto>(updateCourseSucces);

  // Definir las columnas del DataGrid según el esquema
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Nombre",
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
      width: 250,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "idHorario",
      headerName: "ID HORARIO",
      width: 200,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "actions",
      headerName: "Acciones",
      width: 120,

      renderCell: (params) => (
        <>
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
              title={`¿Desactivar estudiante ${params.row.fullName}?`}
              label={`Se desactivará permanentemente el estudiante con DNI ${params.row.name}.`}
            >
              <FormUpdateCourse
                errorsUpdate={errorsUpdate}
                registerUpdate={registerUpdate}
              />
            </MenuButtonComponent>
          </Box>
        </>
      ),
    },
  ];

  // Mapeo de los datos obtenidos de la API para que tengan la estructura adecuada
  const rows =
    course?.content?.map((course) => ({
      id: course.dniProffesor, // Usamos el DNI del profesor como identificador único de cada fila
      name: course.name,
      cantHrs: course.cantHrs,
      level: course.level,
      docenteCedula: course.docenteCedula,
      codigoHorario: course.codigoHorario,
      fullName: course.fullName,
      correo: course.correo,
      dniProffesor: course.dniProffesor,
      idHorario: course.idHorario,
    })) || [];

  // Verificar si está cargando los datos
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
    <>
      <div className={style.container}>
        <Box sx={{ padding: 2 }}>
          <Typography variant="h4" gutterBottom>
            Historial de Docentes
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
                "& .MuiDataGrid-footerContainer": {
                  textAlign: "center",
                },
              }}
            />
          </Paper>
        </Box>
      </div>
    </>
  );
};

export default BoardStudent;
