import { Box, Paper, CircularProgress, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
 import { useGetAllDocent } from "../../hooks";

const BoardDocent = () => {
  const { docent, isLoading, error } = useGetAllDocent(0, 10, "userEntity.username", "asc");
 



  
  // Definir las columnas del DataGrid
  const columns: GridColDef[] = [
    { field: "profile", headerName: "Perfil", width: 150, align: "center" },
    { field: "username", headerName: "Usuario", width: 150, align: "center" },
    { field: "fullName", headerName: "Nombre Completo", width: 200, align: "left" },
    { field: "dni", headerName: "DNI", width: 150, align: "center" },
    { field: "phoneNumber", headerName: "Teléfono", width: 180, align: "center" },
    { field: "address", headerName: "Dirección", width: 250, align: "left" },
    { field: "email", headerName: "Correo", width: 200, align: "left" },
    {
      field: "actions",
      headerName: "",
      width: 120,
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
          
        </Box>
      ),
    },
  ];

  // Mapeo de los datos obtenidos de la API para que tengan la estructura adecuada
  const rows = docent?.content?.map((docent) => ({
    id: docent.dni, // Usamos el DNI como identificador único de cada fila
    profile: docent.profile || "",
    username: docent.username || "",
    fullName: docent.fullName || "",
    dni: docent.dni || "",
    phoneNumber: docent.phoneNumber || "",
    address: docent.address || "",
    email: docent.email || "",
  })) || [];

  // Verificar si está cargando los datos
  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  // Verificar si hay algún error al cargar los datos
  if (error) {
    return <Typography color="error">Error al cargar los docentes: {error.message}</Typography>;
  }

  return (
    
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Historial de Docentes
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

export default BoardDocent;
