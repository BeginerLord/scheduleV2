import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { ScheduleStudentDTO } from "../../model/ScheduleStudent";
import { useGetScheduleStudent } from "../../hooks";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const ScheduleStudent = () => {
  const { scheduleStudent, isLoading } = useGetScheduleStudent();
  const scheduleData = Array.isArray(scheduleStudent)
    ? scheduleStudent
    : [scheduleStudent]; // Convierte el objeto en un arreglo si no lo es
  console.log("scheduleStudent:", scheduleStudent);

  const columns: GridColDef[] = [
    { field: "courseName", headerName: "Nombre del curso", width: 230 },
    { field: "courseHours", headerName: "Duracion del curso", width: 150 },
    { field: "courseLevel", headerName: "Nivel del curso", width: 150 },
    { field: "docentName", headerName: "Nombre del Docente", width: 230 },
    { field: "startTime", headerName: "Fecha de inicio", width: 250 },
    { field: "endTime", headerName: "Fecha de finalizacion", width: 230 },
    { field: "room", headerName: "Salon", width: 150 },
    { field: "day", headerName: "Dia", width: 150 },
  ];
  const rows: ScheduleStudentDTO[] =
    scheduleData?.map((schedule, index) => ({
      
      id: schedule.id || `temp-id-${index}`,
      courseName: schedule.courseName || "",
      courseHours: schedule.courseHours || 0,
      courseLevel: schedule.courseLevel || "",
      docentName: schedule.docentName || "",
      startTime: schedule.startTime || "",
      endTime: schedule.endTime || "",
      room: schedule.room || "",
      day: schedule.day || "",
    })) || [];

  return (
    <ThemeProvider theme={theme}>
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 1130, margin: "auto", marginTop: 4 }}
      >
        <Typography variant="h4" align="center" gutterBottom sx={{ pt: 2 }}>
          Horario Estudiantil
        </Typography>
        <Table aria-label="horario estudiantil">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.field}
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: "primary.main",
                    color: "white",
                  }}
                >
                  {column.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {rows.map((row) => (
              <TableRow
                key={row.id} // Usa el ID único aquí
                sx={{
                  "&:nth-of-type(odd)": { backgroundColor: "action.hover" },
                }}
              >
                {columns.map((column) => (
                  <TableCell key={`${row.id}-${column.field}`}>
                    {row[column.field as keyof ScheduleStudentDTO] ?? "N/A"}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default ScheduleStudent;
