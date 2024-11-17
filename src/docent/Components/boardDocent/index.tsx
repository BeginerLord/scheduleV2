import { Box, Paper, CircularProgress, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetAllDocent } from "../../hooks";

const DocentList = () => {
  const { docent, isLoading, error } = useGetAllDocent(0, 10, "userEntity.username", "asc");

  const columns: GridColDef[] = [
    { field: "profile", headerName: "Perfil", width: 150, align: "center" },
    { field: "username", headerName: "Usuario", width: 150, align: "center" },
    { field: "fullName", headerName: "Nombre Completo", width: 200, align: "left" },
    { field: "dni", headerName: "DNI", width: 150, align: "center" },
    { field: "phoneNumber", headerName: "Teléfono", width: 180, align: "center" },
    { field: "address", headerName: "Dirección", width: 250, align: "left" },
    { field: "email", headerName: "Correo", width: 200, align: "left" },
  ];

  const rows = docent?.content?.map((docent, index) => ({
    id: index,
    profile: docent.profile || "",
    username: docent.username || "",
    fullName: docent.fullName || "",
    dni: docent.dni || "",
    phoneNumber: docent.phoneNumber || "",
    address: docent.address || "",
    email: docent.email || "",
  })) || [];

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography color="error">Error al cargar los docentes: {error.message}</Typography>;
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Docentes
      </Typography>
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          autoPageSize
          pageSize={10}
          rowBuffer={5}
          getRowSpacing={(params) => ({
            top: params.isFirstVisible ? 10 : 5,
            bottom: params.isLastVisible ? 10 : 5,
          })}
          sx={{
            "& .MuiDataGrid-cell": {
              fontSize: "1rem",
              padding: "8px 12px",
              textAlign: "left", // Alineación por defecto a la izquierda
            },
            "& .MuiDataGrid-columnHeaders": {
              fontSize: "1.1rem",
              fontWeight: "bold",
              textAlign: "center", // Alineación de los encabezados al centro
            },
            "& .MuiDataGrid-footerContainer": {
              textAlign: "center",
            },
          }}
        />
      </Paper>
    </Box>
  );
};

export default DocentList;
