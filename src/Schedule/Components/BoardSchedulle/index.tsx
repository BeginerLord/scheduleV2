import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Alert, Box, CircularProgress, Paper, Typography } from "@mui/material";
import {
  useDeleteSchedule,
  useGetAllSchedule,
  useUpdateSchedule,
} from "../../hooks";
import MenuButtonComponent from "../../../Components/ui/buttonMenu";
import { UpdateScheduleDto } from "../../model/schedule";
import useCustomerForm from "../../../hooksCustomForms/useCustomerForm";
import FormUpdateSchedule from "../../../student/Components/formsUpdate";
import { useEffect, useState } from "react";
import { getErrorMessage } from "../../../utils/errorUtils";

const ScheduleList = () => {
  const { isLoading, scheduleAll: schedules } = useGetAllSchedule(
    0,
    10,
    "startTime",
    "asc"
  );
  const { deleteDchedule, isPending: isDeletePending, isError: isDeleteError, error: deleteError, isSuccess: isDeleteSuccess } = useDeleteSchedule();
  const { updateScheduleMutation, isPending: isUpdatePending, isError: isUpdateError, error: updateError, isSuccess: isUpdateSuccess } = useUpdateSchedule();

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  useEffect(() => {
    if (isDeleteSuccess || isUpdateSuccess) {
      setShowSuccessAlert(true);
      const timer = setTimeout(() => {
        setShowSuccessAlert(false);
      }, 20000); // 20 seconds
      return () => clearTimeout(timer);
    }
  }, [isDeleteSuccess, isUpdateSuccess]);

  useEffect(() => {
    if (isDeleteError || isUpdateError) {
      setShowErrorAlert(true);
      const timer = setTimeout(() => {
        setShowErrorAlert(false);
      }, 20000); // 20 seconds
      return () => clearTimeout(timer);
    }
  }, [isDeleteError, isUpdateError]);

  // Función para actualizar horario
  const updateScheduleSuccess = async (data: UpdateScheduleDto) => {
    const scheduleId = String(data.id); // Convertir el id a string

    await updateScheduleMutation({
      id: scheduleId,
      schedule: {
        id: scheduleId,
        startTime: data.startTime || "",
        endTime: data.endTime || "",
        room: data.room || "",
        day: data.day || "",
      },
    });
  };

  const {
    register: registerUpdate,
    handleSubmit: handleSubmitUpdate,
    errors: errorsUpdate,
    reset,
  } = useCustomerForm<UpdateScheduleDto>(updateScheduleSuccess);

  // Función para desactivar un horario
  const handleDeactivate = async (id: string) => {
    try {
      await deleteDchedule(id);
      console.log(`Horario con ID ${id} eliminado exitosamente.`);
    } catch (error) {
      console.error(`Error al eliminar el horario con ID ${id}:`, error);
    }
  };

  // Definir columnas con la columna de acciones incluida
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 150, align: "center" },
    {
      field: "startTime",
      headerName: "Fecha de inicio",
      width: 150,
      align: "center",
    },
    {
      field: "endTime",
      headerName: "Fecha de finalización",
      width: 150,
      align: "center",
    },
    { field: "room", headerName: "Salón", width: 200, align: "left" },
    { field: "day", headerName: "Día", width: 150, align: "center" },
    {
      field: "actions",
      headerName: "Acciones",
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
          <MenuButtonComponent
            onEdit={() => handleSubmitUpdate(params.row)} // Enviar los datos del horario al formulario
            isPendingEdit={isUpdatePending}
            onDeactivate={() => handleDeactivate(params.row.id)}
            isPendingDeactivate={isDeletePending}
            title={`¿Eliminar horario con ID ${params.row.id}?`}
            label={`Se eliminará permanentemente el horario con ID ${params.row.id}.`}
          >
            <FormUpdateSchedule
              errorsUpdate={errorsUpdate}
              registerUpdate={registerUpdate}
            />
          </MenuButtonComponent>
        </Box>
      ),
    },
  ];

  // Mapeo de los datos obtenidos de la API
  const rows =
    schedules?.content?.map((schedule, index) => ({
      id: schedule.id || index, // Usamos el índice como fallback
      startTime: schedule.startTime || "",
      endTime: schedule.endTime || "",
      room: schedule.room || "",
      day: schedule.day || "",
    })) || [];

  // Mostrar un indicador de carga si los datos están cargando
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
    <Box sx={{ padding: 2 }}>
       {showErrorAlert && (
          <Alert severity="error">{getErrorMessage(deleteError || updateError)}</Alert>
        )}
        {showSuccessAlert && (
          <Alert severity="success">Operación realizada exitosamente!</Alert>
        )}
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
              textAlign: "left",
            },
            "& .MuiDataGrid-columnHeaders": {
              fontSize: "1.1rem",
              fontWeight: "bold",
              textAlign: "center",
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
