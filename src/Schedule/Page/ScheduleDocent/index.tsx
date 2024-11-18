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
import { useGetScheduleDocent } from "../../../Course/hooks";
import { ScheduleDocentDTO } from "../../model/ScheduleDocent";

  
  const theme = createTheme({
    palette: {
      primary: {
        main: "#DE5260",
      },
      secondary: {
        main: "#dc004e",
      },
    },
  });
  
  const ScheduleDocent = () => {
    const { isLoading,scheduleDocent } = useGetScheduleDocent();

    const scheduleData = Array.isArray(scheduleDocent)
    ? scheduleDocent
    : [scheduleDocent];
    console.log("scheduleDocent:", scheduleDocent);
  
    const columns: GridColDef[] = [
      { field: "courseName", headerName: "Nombre del curso", width: 230 },
      { field: "courseHours", headerName: "Duracion del curso", width: 150 },
      { field: "level", headerName: "Nivel del curso", width: 150 },
      { field: "professorName", headerName: "Nombre   Docente", width: 230 },
      { field: "startTime", headerName: "Fecha de inicio", width: 250 },
      { field: "endTime", headerName: "Fecha de finalizacion", width: 230 },
      { field: "room", headerName: "Salon", width: 150 },
      { field: "day", headerName: "Dia", width: 150 },
    ];
    const rows: ScheduleDocentDTO[] =
  Array.isArray(scheduleData) && scheduleData.length > 0
    ? scheduleData.map((schedule, index) => ({
        id: schedule?.id || `temp-id-${index}`,
        courseName: schedule?.courseName || "",
        courseHours: schedule?.courseHours || 0,
        level: schedule?.level || "",
        professorName: schedule?.professorName || "",
        startTime: schedule?.startTime || "",
        endTime: schedule?.endTime || "",
        room: schedule?.room || "",
        day: schedule?.day || "",
      }))
    : [];

  
    return (
      <ThemeProvider theme={theme}>
        <TableContainer
          component={Paper}
          sx={{ maxWidth: 1130, margin: "auto", marginTop: 4 }}
        >
          <Typography variant="h4" align="center" gutterBottom sx={{ pt: 2 }}>
            Horario Docente
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
                      {row[column.field as keyof ScheduleDocentDTO] ?? "N/A"}
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
  
  export default ScheduleDocent;
  