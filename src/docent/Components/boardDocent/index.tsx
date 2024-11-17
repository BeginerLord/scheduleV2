import { Box, Paper, CircularProgress, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetAllDocent } from "../../hooks";
 
const DocentList = () => {
  // Llamamos al hook para obtener los docentes
  const {  data,isLoading } = useGetAllDocent(0, 10, "name", "asc");

  // Definimos las columnas para el DataGrid
  const columns: GridColDef[] = [
    { field: "profile", headerName: "Perfil", width: 150 },
    { field: "username", headerName: "Usuario", width: 150 },
    { field: "fullName", headerName: "Nombre Completo", width: 200 },
    { field: "dni", headerName: "DNI", width: 150 },
    { field: "phoneNumber", headerName: "Teléfono", width: 180 },
    { field: "address", headerName: "Dirección", width: 250 },
    { field: "email", headerName: "Correo", width: 200 },
  ];

  // Transformamos los datos en las filas necesarias para el DataGrid
  const rows = data?.content?.map((docent, index) => ({
    id: index,
    profile: docent.profile || "",
    username: docent.username || "",
    fullName: docent.fullName || "",
    dni: docent.dni || "",
    phoneNumber: docent.phoneNumber || "",
    address: docent.address || "",
    email: docent.email || "",
  })) || [];

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Docentes
      </Typography>

      {/* Muestra un cargando mientras los datos están siendo obtenidos */}
      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
            rows={rows}
            columns={columns}
            autoPageSize={true}
            rowBufferPx={200}
            getRowSpacing={(params) => ({
              top: params.isFirstVisible ? 10 : 5,
              bottom: params.isLastVisible ? 10 : 5,
            })}
            sx={{
              "& .MuiDataGrid-cell": {
                fontSize: "1.3rem", // Tamaño de letra para las celdas
                paddingLeft: "80px", // Espacio a la izquierda
                paddingRight: "140px",
                textAlign: "center",
                
              },
              "& .MuiDataGrid-columnHeaders": {
                fontSize: "1.4rem", // Tamaño de letra para los encabezados de columna
                paddingLeft: "55px", // Espacio a la izquierda
                textAlign: "center",
               
              },
            }}
          />
        </Paper>
      )}
    </Box>
  );
};

export default DocentList;
