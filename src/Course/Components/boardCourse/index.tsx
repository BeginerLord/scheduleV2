import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetAllCourse } from "../../hooks";
import { Box, CircularProgress, Paper, Typography } from "@mui/material";

const CourseList = () => {
    const { isLoading, course } = useGetAllCourse(0, 10, "userEntity.username", "asc");
  
    const columns: GridColDef[] = [
      { field: "name", headerName: "Nombre", width: 150, align: "center" },
      { field: "cantHrs", headerName: "Cantidad de horas", width: 150, align: "center" },
      { field: "level", headerName: "Nivel", width: 200, align: "left" },
      { field: "dniProffesor", headerName: "CC Docente", width: 150, align: "center" },
      { field: "idHorario", headerName: "Horario id", width: 180, align: "center" },
      
    ];
  
    const rows = course?.content?.map((course, index) => ({
      id: index,
      name: course.name || "",
      username: course.cantHrs || "",
      fullName: course.level || "",
      dni: course.dniProffesor || "",
      phoneNumber: course.idHorario || "",
      
    })) || [];
  
    if (isLoading) {
      return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <CircularProgress />
        </Box>
      );
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
  
  export default CourseList;
  