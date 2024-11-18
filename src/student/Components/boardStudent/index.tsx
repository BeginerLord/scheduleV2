import { Box, Paper, CircularProgress, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetAllStudent } from "../../hooks"; // Hook personalizado para obtener estudiantes
import style from "./boardStudent.module.css";

const BoardStudent = () => {
  const { student, isLoading } = useGetAllStudent(0, 10, "userEntity.username", "asc");

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
      headerName: "",
      width: 120,
      headerAlign: "center",
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
          {/* Puedes agregar botones de acción aquí, como editar o eliminar */}
        </Box>
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
