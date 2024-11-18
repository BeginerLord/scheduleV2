import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import { useGetAllSchedule } from "../../hooks";

const ScheduleList = () => {
    const {isLoading, scheduleAll:schedules  } = useGetAllSchedule(0, 10, "userEntity.username", "asc");
  
    const columns: GridColDef[] = [
      { field: "startTime", headerName: "Fecha de inicio", width: 150, align: "center" },
      { field: "endTime", headerName: "Fecha de finalizacion", width: 150, align: "center" },
      { field: "room", headerName: "Salon", width: 200, align: "left" },
      { field: "day", headerName: "Dia", width: 150, align: "center" },
    
    ];
  
    const rows = schedules?.content?.map((schedule, index) => ({
      id: index,
      startTime: schedule.startTime || "",
      endTime: schedule.endTime || "",
      room: schedule.room || "",
      day: schedule.day || "",

      
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
          Historial de horarios
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
  
  export default ScheduleList;
  