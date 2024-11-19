import { Box, Paper, CircularProgress, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useDeleteStudent, useGetAllStudent, useUpdateStudent } from "../../hooks"; // Hook personalizado para obtener estudiantes
import style from "./boardStudent.module.css";
import { UpdateStudentDto } from "../../models/Student ";
import useCustomerForm from "../../../hooksCustomForms/useCustomerForm";
import MenuButtonComponent from "../../../Components/ui/buttonMenu";
 import FormUpdateStudents from "../formUpdateStudent";

const BoardStudent = () => {
  const { student, isLoading } = useGetAllStudent(0, 10, "userEntity.username", "asc");
  const{deleteStudentMutation:deleteStudent, isPending:isPendingDelete}=useDeleteStudent();
  const{updateStudentMutation, isPending}=useUpdateStudent();

  const handleDeactivate = async (dni: string) => {
    await deleteStudent(dni);
  };

  const updateStudentSucces = async (data: UpdateStudentDto) => {
  
    await updateStudentMutation({
      dni: data.dni || "",
      student: {
        description: data.description,
        carrer: data.carrer,
        username: data.username,
        fullName: data.fullName,
        phoneNumber: data.phoneNumber,
        address: data.address,
        email: data.email,
        password: data.password,
      },
    });
  };

  const {
    register: registerUpdate,
    handleSubmit: handleSubmitUpdate,
    errors: errorsUpdate,
    reset,
  } = useCustomerForm<UpdateStudentDto>(updateStudentSucces);

  // Definir las columnas del DataGrid según el esquema
  const columns: GridColDef[] = [
    { field: "description", headerName: "Descripción", width: 150, headerAlign: "center", align: "center" },
    { field: "carrer", headerName: "Carrera", width: 150, headerAlign: "center", align: "center" },
    { field: "username", headerName: "Usuario", width: 150, headerAlign: "center", align: "center" },
    { field: "fullName", headerName: "Nombre Completo", width: 200, headerAlign: "left", align: "left" },
    { field: "dni", headerName: "DNI", width: 150, headerAlign: "center", align: "center" },
    { field: "phoneNumber", headerName: "Teléfono", width: 180, headerAlign: "center", align: "center" },
    { field: "address", headerName: "Dirección", width: 250, headerAlign: "left", align: "left" },
    { field: "email", headerName: "Correo", width: 200, headerAlign: "left", align: "left" },
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
              onDeactivate={() => handleDeactivate(params.row.dni)}
              isPendingDeactivate={isPendingDelete}
              isPendingEdit={isPending}
              title={`¿Desactivar estudiante ${params.row.fullName}?`}
              label={`Se desactivará permanentemente el estudiante con DNI ${params.row.dni}.`}
            >
              <FormUpdateStudents
              errorsUpdate={errorsUpdate}
              registerUpdate={registerUpdate}/>
            </MenuButtonComponent>
          </Box>
        </>
      ),
    },
  ];

  // Mapeo de los datos obtenidos de la API para que tengan la estructura adecuada
  const rows =
    student?.content?.map((student) => ({
      id: student.dni, // Usamos el DNI como identificador único de cada fila
      description: student.description,
      carrer: student.carrer,
      username: student.username,
      fullName: student.fullName,
      dni: student.dni,
      phoneNumber: student.phoneNumber,
      address: student.address,
      email: student.email,
    })) || [];

  // Verificar si está cargando los datos
  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <div className={style.container}>
        <Box sx={{ padding: 2 }}>
          <Typography variant="h4" gutterBottom>
            Historial de Estudiantes
          </Typography>
          <Paper sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              autoPageSize
              rowBuffer={5}
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
